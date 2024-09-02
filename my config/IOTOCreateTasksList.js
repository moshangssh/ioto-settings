/*
** Script Name: Create Tasks List
** Author: Johnny
** Bilibili: https://space.bilibili.com/432408734
** Version: 1.1.0
*/

// enableFutureDaysChoices: 允许用户选择是否为将来的日期创建TDL
// timestampFormat: 允许用户自己设置时间戳的格式

async function IOTOCreateTasksList(tp, folderPath, settings) {
	
    let { template, enableFutureDaysChoices, timestampFormat, useCustomTDLName, projectNameFormat} = settings;
    
    const futureDaysChoices = [
        "【1】创建今天的任务列表",
        "【2】创建明天的任务列表",
        "【3】创建后天的任务列表",
        "【4】创建大后天的任务列表"
    ];
    
    const futureDaysOptions = [
        0,
        1,
        2,
        3
    ];
    
    let offset = 0;
    
    if (enableFutureDaysChoices) {
        timestampFormat = "YYYY-MM-DD";
        offset = await tp.system.suggester(futureDaysChoices, futureDaysOptions);
    }
    
    if (folderPath) {
        const userAssignedName = useCustomTDLName ? await tp.system.prompt("请输入你想创建的任务列表的名字") : "";
        const customTDLName = (!useCustomTDLName || !userAssignedName) ? "" : (userAssignedName);
        const tdlName = customTDLName + "_" + tp.date.now(timestampFormat, offset ? offset : 0);
        const tdlNote = tp.file.find_tfile(folderPath + "/" + tdlName);

        if (tdlNote) {
            app.workspace.openLinkText(tdlNote.path, "/", true);
        } else {
            let newTDL = await tp.file.create_new(tp.file.find_tfile(template), tdlName, false, app.vault.getAbstractFileByPath(folderPath));
            app.workspace.openLinkText(newTDL.path, "/", true);
        }

    }
}

module.exports = IOTOCreateTasksList;