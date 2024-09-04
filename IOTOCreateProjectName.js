async function IOTOCreateProjectName(tp,targetPath, projectNameFormat) {
    const {projectNameSource, outcomeFolder,tdlNote} = app.plugins.plugins["ioto-settings"].settings;
    const isFirstLevel = "first" == projectNameSource;
    const projectFolderName = isFirstLevel || targetPath.startsWith(outcomeFolder) ? targetPath.split("/").slice(1).first() : targetPath.split("/").last();
    let projectName;
    switch (projectNameFormat) {
        case "firstDash":
            if(projectFolderName.includes("-")) {
                projectName = projectFolderName.split("-").slice(1).join("-");
            } else {
                projectName = projectFolderName;
            }      
            break;

        case "lastDash":
            projectName = projectFolderName.split("-").last();
            break;

        case "customfilename":
            projectName = tp.file.title;
            break;

        default:
            projectName = projectFolderName;
            break;
    }
    return projectName;
}

module.exports = IOTOCreateProjectName;