async function IOTOCreateProjectName(targetPath, projectNameFormat) {
    const {projectNameSource, outcomeFolder} = app.plugins.plugins["ioto-settings"].settings;
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

        default:
            projectName = projectFolderName;
            break;
    }
    return projectName;
}

module.exports = IOTOCreateProjectName;