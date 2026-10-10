---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="jing-home">

<section class="home-intro" id="about">
  <p class="home-kicker"><i class="fas fa-user-circle" aria-hidden="true"></i> Academic Homepage</p>
  <h1 class="home-title">Hi, I am Jing Qu.</h1>

  <div class="language-switcher" role="group" aria-label="Page language">
    <button class="lang-tab active" type="button" data-lang="en" aria-pressed="true">English</button>
    <button class="lang-tab" type="button" data-lang="zh" aria-pressed="false">中文</button>
  </div>

  <div class="i18n-en">
    <p class="home-lead">Welcome to my homepage. I am affiliated with <strong>Shandong University</strong>, and my research lies at the intersection of human-computer interaction, healthcare, and intelligent systems.</p>
    <p>I study virtual and augmented reality rehabilitation, multimodal neuroergonomics, brain function assessment, affective computing, and data-driven design for intelligent rehabilitation. My work combines interaction design with fNIRS, EEG, eye tracking, behavioral signals, and machine learning.</p>
  </div>

  <div class="i18n-zh">
    <p class="home-lead">欢迎访问我的个人主页。我现就读或工作于<strong>山东大学</strong>，研究方向位于人机交互、医疗健康与智能系统的交叉领域。</p>
    <p>我的研究包括虚拟现实与增强现实康复、多模态神经工效学、脑功能评估、情感计算，以及智能康复产品的数据驱动设计。相关工作结合了交互设计、fNIRS、EEG、眼动、行为信号与机器学习方法。</p>
  </div>

  <nav class="home-actions" aria-label="Academic profile links">
    <a class="home-action home-action-primary" href="/publications/"><i class="fas fa-book-open" aria-hidden="true"></i><span class="i18n-en-inline">Publications</span><span class="i18n-zh-inline">论文列表</span></a>
    <a class="home-action" href="https://orcid.org/0000-0003-4783-9244" target="_blank" rel="noopener"><i class="ai ai-orcid" aria-hidden="true"></i>ORCID</a>
    <a class="home-action" href="https://dblp.org/pid/35/588-1.html" target="_blank" rel="noopener"><i class="ai ai-dblp" aria-hidden="true"></i>DBLP</a>
    <a class="home-action" href="/cv/"><i class="fas fa-file-alt" aria-hidden="true"></i>CV</a>
  </nav>
</section>

<section class="jing-section" id="research">
  <div class="section-heading">
    <p class="section-kicker"><i class="fas fa-flask" aria-hidden="true"></i><span class="i18n-en-inline">Research</span><span class="i18n-zh-inline">研究方向</span></p>
    <h2><span class="i18n-en-inline">Research Interests</span><span class="i18n-zh-inline">研究兴趣</span></h2>
    <p class="section-summary i18n-en">Human-centered technologies for assessment, training, and rehabilitation.</p>
    <p class="section-summary i18n-zh">面向评估、训练与康复的人本智能技术。</p>
  </div>

  <div class="research-grid">
    <article class="research-card">
      <i class="fas fa-vr-cardboard" aria-hidden="true"></i>
      <h3><span class="i18n-en-inline">VR/AR Rehabilitation</span><span class="i18n-zh-inline">VR/AR 康复</span></h3>
      <p class="i18n-en">Immersive and adaptive interaction for motor and cognitive rehabilitation.</p>
      <p class="i18n-zh">面向运动与认知康复的沉浸式、自适应交互。</p>
    </article>
    <article class="research-card">
      <i class="fas fa-brain" aria-hidden="true"></i>
      <h3><span class="i18n-en-inline">Multimodal Neuroergonomics</span><span class="i18n-zh-inline">多模态神经工效学</span></h3>
      <p class="i18n-en">fNIRS, EEG, eye tracking, behavior, and physiological signals.</p>
      <p class="i18n-zh">融合 fNIRS、EEG、眼动、行为与生理信号的研究。</p>
    </article>
    <article class="research-card">
      <i class="fas fa-chart-line" aria-hidden="true"></i>
      <h3><span class="i18n-en-inline">Brain Function Assessment</span><span class="i18n-zh-inline">脑功能评估</span></h3>
      <p class="i18n-en">Machine-learning methods and integrated tools for intelligent assessment.</p>
      <p class="i18n-zh">用于智能评估的机器学习方法与集成化工具。</p>
    </article>
    <article class="research-card">
      <i class="fas fa-project-diagram" aria-hidden="true"></i>
      <h3><span class="i18n-en-inline">Intelligent Rehabilitation Design</span><span class="i18n-zh-inline">智能康复设计</span></h3>
      <p class="i18n-en">Data-driven and knowledge-graph approaches to rehabilitation product design.</p>
      <p class="i18n-zh">面向康复产品设计的数据驱动与知识图谱方法。</p>
    </article>
  </div>
</section>

<section class="jing-section" id="news">
  <div class="section-heading">
    <p class="section-kicker"><i class="fas fa-bullhorn" aria-hidden="true"></i><span class="i18n-en-inline">Updates</span><span class="i18n-zh-inline">最新动态</span></p>
    <h2><span class="i18n-en-inline">News</span><span class="i18n-zh-inline">动态</span></h2>
  </div>

  <div class="news-feed">
    {% for paper in site.data.publications %}
      <article class="news-feed-item">
        <time datetime="{{ paper.year }}">{{ paper.year }}</time>
        <p><span class="i18n-en-inline">Published in</span><span class="i18n-zh-inline">发表于</span> <strong>{{ paper.short_venue }}</strong>: <a href="{{ paper.paperurl }}" target="_blank" rel="noopener">{{ paper.title }}</a></p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="jing-section" id="publications">
  <div class="section-heading section-heading-row">
    <div>
      <p class="section-kicker"><i class="fas fa-book-open" aria-hidden="true"></i><span class="i18n-en-inline">Research Output</span><span class="i18n-zh-inline">科研成果</span></p>
      <h2><span class="i18n-en-inline">Publications</span><span class="i18n-zh-inline">论文成果</span></h2>
    </div>
    <a class="section-link" href="/publications/"><span class="i18n-en-inline">View all publications</span><span class="i18n-zh-inline">查看全部论文</span><i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  <p class="publication-legend"><sup>*</sup> <span class="i18n-en-inline">Equal contribution. Jing Qu is shown in bold.</span><span class="i18n-zh-inline">共同第一作者；Jing Qu 以粗体显示。</span></p>
  {% include jing-publication-browser.html %}
</section>

<section class="jing-section split-section" id="education">
  <div class="split-heading">
    <p class="section-kicker"><i class="fas fa-graduation-cap" aria-hidden="true"></i><span class="i18n-en-inline">Background</span><span class="i18n-zh-inline">教育背景</span></p>
    <h2><span class="i18n-en-inline">Education</span><span class="i18n-zh-inline">教育经历</span></h2>
  </div>
  <div class="timeline-entry">
    <span class="timeline-dot" aria-hidden="true"></span>
    <h3>Shandong University</h3>
    <p class="i18n-en">Education and research affiliation. Degree, school, and dates will be added after confirmation.</p>
    <p class="i18n-zh">教育与科研单位。学位、学院及起止时间将在确认后补充。</p>
  </div>
</section>

<section class="jing-section" id="services">
  <div class="section-heading section-heading-row">
    <div>
      <p class="section-kicker"><i class="fas fa-hands-helping" aria-hidden="true"></i><span class="i18n-en-inline">Academic Community</span><span class="i18n-zh-inline">学术服务</span></p>
      <h2><span class="i18n-en-inline">Service and Leadership</span><span class="i18n-zh-inline">服务与领导力</span></h2>
    </div>
    <a class="section-link" href="/service/"><span class="i18n-en-inline">Details</span><span class="i18n-zh-inline">详细信息</span><i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  <div class="service-list">
    <div class="service-item"><span>2026</span><p><strong>Reviewer</strong>, <em>Complementary Therapies in Medicine</em></p></div>
    <div class="service-item"><span>2026</span><p><strong>Reviewer</strong>, <em>Geriatric Nursing</em></p></div>
    <div class="service-item"><span>2026</span><p><strong>Reviewer</strong>, <em>International Journal of Human-Computer Studies</em></p></div>
  </div>
</section>

<section class="jing-section" id="honors">
  <div class="section-heading section-heading-row">
    <div>
      <p class="section-kicker"><i class="fas fa-award" aria-hidden="true"></i><span class="i18n-en-inline">Recognition</span><span class="i18n-zh-inline">荣誉奖励</span></p>
      <h2><span class="i18n-en-inline">Honors and Awards</span><span class="i18n-zh-inline">荣誉与奖励</span></h2>
    </div>
    <a class="section-link" href="/honors/"><span class="i18n-en-inline">Open section</span><span class="i18n-zh-inline">打开栏目</span><i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  <div class="honors-note">
    <i class="fas fa-shield-alt" aria-hidden="true"></i>
    <p class="i18n-en">This section is reserved for verified awards, scholarships, and honors. No unverified same-name web results are displayed.</p>
    <p class="i18n-zh">本栏目用于展示已核实的奖项、奖学金与荣誉。目前不展示无法排除同名歧义的网络检索结果。</p>
  </div>
</section>

<section class="jing-section" id="links">
  <div class="section-heading">
    <p class="section-kicker"><i class="fas fa-link" aria-hidden="true"></i><span class="i18n-en-inline">Profiles</span><span class="i18n-zh-inline">学术主页</span></p>
    <h2><span class="i18n-en-inline">Links</span><span class="i18n-zh-inline">相关链接</span></h2>
  </div>
  <div class="profile-links">
    <a href="https://orcid.org/0000-0003-4783-9244" target="_blank" rel="noopener"><i class="ai ai-orcid" aria-hidden="true"></i><span>ORCID</span><small>0000-0003-4783-9244</small></a>
    <a href="https://dblp.org/pid/35/588-1.html" target="_blank" rel="noopener"><i class="ai ai-dblp" aria-hidden="true"></i><span>DBLP</span><small>Jing Qu</small></a>
    <a href="https://github.com/Aurora00000" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span><small>Aurora00000</small></a>
  </div>
</section>

</div>

<button class="home-back-top" type="button" aria-label="Back to top" title="Back to top"><i class="fas fa-arrow-up" aria-hidden="true"></i></button>
<script src="/assets/js/jing-home.js"></script>
