---
<%* 
const {LTDListInputSectionHeading, LTDListOutputSectionHeading, LTDListOutcomeSectionHeading, defaultTDLDateFormat, projectNameFormat, defaultTDLHeadingLevel} = app.plugins.plugins["ioto-settings"].settings;

// 提取文件名，去掉日期部分
const fileName = tp.file.title;
const datePattern = new RegExp("_" + tp.date.now(defaultTDLDateFormat) + "$");
const projectName = fileName.replace(datePattern, "");

 _%>
Project: ["<% projectName %>"]
cssclasses: ["hideProperties"]
---
<% defaultTDLHeadingLevel + " " + LTDListInputSectionHeading %>

- [ ] 

<% defaultTDLHeadingLevel + " " + LTDListOutputSectionHeading %>

- [ ] 

<% defaultTDLHeadingLevel + " " + LTDListOutcomeSectionHeading %>

- [ ] 

<%* if (tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitle")) {
	await tp.file.rename(projectName + "_" + tp.date.now(defaultTDLDateFormat));
} _%>

<%*
// 你可以使用这个文件来自定义自己的LTD列表文件
_%>
