---
<%* 
const {defaultTDLDateFormat} = app.plugins.plugins["ioto-settings"].settings;
const projectName = app.metadataCache.getFileCache(tp.config.active_file)?.frontmatter?.Project;
const tagsInput = await tp.system.prompt("请输入标签 (用英文或中文逗号分隔多个标签):");
const tags = tagsInput.split(/[,，]/).map(tag => tag.trim());  // 使用正则表达式同时处理中英文逗号
const creationDate = tp.file.creation_date(`${defaultTDLDateFormat} HH:mm`);
_%>
Project: ["<% projectName %>"]
Tags: ["<% tags.join('", "') %>"]
Created: "<% creationDate %>"
---

# <% tp.file.title %>
---

