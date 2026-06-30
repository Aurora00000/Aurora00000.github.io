# 个人主页后续更新说明

这份说明用于维护你的 GitHub Pages 个人主页：

网站地址：

```text
https://Aurora00000.github.io/
```

本地项目目录：

```text
F:\实验室数据\个人主页
```

## 一、最常用的修改位置

### 1. 修改首页文字

编辑：

```text
_pages/about.md
```

这里控制首页主体内容，包括：

- About Me
- News
- Research Interests
- Contact

改文字时，直接改对应段落即可。

### 2. 修改左侧个人信息栏

编辑：

```text
_config.yml
```

重点字段：

```yaml
author:
  avatar           : "profile.png"
  name             : "Jing Qu"
  bio              : "..."
  location         : "..."
  employer         : "Shandong University"
  email            : your@email.com
  orcid            : "https://orcid.org/0000-0003-4783-9244"
```

如果暂时不想显示邮箱，就保留为空：

```yaml
email            :
```

### 3. 更换头像

替换这个文件：

```text
images/profile.png
```

建议：

- 使用正方形照片
- 文件名保持 `profile.png`
- 替换后不需要改 `_config.yml`

### 4. 修改顶部导航栏

编辑：

```text
_data/navigation.yml
```

例如要增加或删除导航项，就改这里。

## 二、更新 News

编辑：

```text
_pages/about.md
```

找到：

```markdown
# 🔥 News
```

按这种格式添加：

```markdown
- *2026.06*: Our paper xxx was accepted by xxx.
- *2025.12*: I received xxx award.
```

建议最新消息放在最上面。

## 三、更新 Honors and Awards

编辑：

```text
_pages/honors.md
```

找到：

```markdown
# 🎖 Honors and Awards
```

可以改成类似：

```markdown
- **Scholarships**: xxx Scholarship, xxx Scholarship.
- **Awards**: First Prize, xxx Competition, 2025.
- **Honors**: Outstanding Graduate Student, Shandong University.
```

注意：奖项最好写真实、可核对的信息，不确定的先不要写。

## 四、更新 Service and Leadership

编辑：

```text
_pages/service.md
```

这里可以写：

- 期刊审稿服务
- 会议审稿服务
- 学术组织服务
- 实验室/学生组织管理职责
- 竞赛组织或志愿服务

期刊审稿可以写成：

```markdown
- *International Journal of Human-Computer Studies* (Elsevier), reviewer, 2026.
```

## 五、更新精选论文卡片

编辑：

```text
_pages/publications.html
```

每篇论文卡片大概长这样：

```html
<div class="paper-box">
  <div class="paper-box-image">
    <figure class="paper-figure">
      <div class="paper-badge">Information Fusion 2026</div>
      <img src="/images/paper-asac-net.jpg" alt="Graphical abstract for ASAC-Net" />
    </figure>
  </div>
  <div class="paper-box-text">
    <p class="paper-box-title"><a href="论文 DOI 链接">论文标题</a></p>
    <p class="paper-box-authors">作者列表</p>
    <p class="paper-box-summary">一句话简介</p>
    <p class="paper-box-links">[<a href="论文 DOI 链接">DOI</a>]</p>
  </div>
</div>
```

如果要换论文图：

1. 把图片放到：

```text
images/
```

2. 修改图片路径，例如：

```html
<img src="/images/new-paper-image.jpg" alt="..." />
```

建议图片命名用英文和短横线，例如：

```text
paper-new-work.jpg
```

## 六、更新完整论文列表

所有论文条目在：

```text
_publications
```

每篇论文一个 `.md` 文件。

如果要新增论文，可以复制一个旧文件，然后改：

```yaml
title:
category:
permalink:
excerpt:
date:
venue:
paperurl:
citation:
```

常用分类：

```yaml
category: manuscripts
```

或：

```yaml
category: conferences
```

`date` 建议用：

```yaml
date: 2026-01-01
```

如果只知道年份，就把月份和日期写成 `01-01`。

## 七、每次修改后如何更新网站

打开 PowerShell，运行：

```powershell
cd "F:\实验室数据\个人主页"

& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" status
& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" add .
& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" commit -m "Update homepage"
& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" push
```

然后等待 1-3 分钟，刷新：

```text
https://Aurora00000.github.io/
```

如果页面没变化，按：

```text
Ctrl + F5
```

强制刷新浏览器缓存。

## 八、如何确认是否发布成功

进入 GitHub 仓库：

```text
https://github.com/Aurora00000/Aurora00000.github.io
```

查看：

- `Actions`：看构建是否有红色失败
- `Settings -> Pages`：看是否显示网站已发布

如果构建失败，通常是：

- `_config.yml` 缩进错误
- Markdown 文件头部的 `---` 缺失
- YAML 字段里的冒号 `:` 没有用引号包起来

## 九、常见问题

### 1. GitHub Pages 等很久还是没更新

先等 3-5 分钟，然后按 `Ctrl + F5`。

如果仍然没更新，去 GitHub 的 `Actions` 页面看是否构建失败。

### 2. PowerShell 提示 nothing to commit

意思是没有检测到新修改。确认你是否真的保存了文件。

### 3. commit 写错了怎么办

小问题不用管，下一次继续提交即可。

### 4. 图片不显示

检查图片路径是否写成：

```html
<img src="/images/xxx.jpg" />
```

并确认图片确实在：

```text
images/xxx.jpg
```

### 5. 页面布局乱了

优先检查 `_pages/about.md` 里有没有少写：

```html
</div>
```

论文卡片里每个 `<div>` 都要配套关闭。

## 十、建议维护习惯

- 每次只改一小部分，确认没问题再继续改。
- 图片文件名尽量用英文、数字、短横线。
- 论文和奖项不要写不确定的信息。
- 重要改动前可以先备份对应文件。
