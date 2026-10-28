/* ============================================================
   数据
   ============================================================ */
const POSTS = [
  {
    id: 4,
    title: '无题（节选）',
    excerpt: '卤味忽从旁边来，夫学须静才须学。旧年过去乃新年，是页无人昏睡去……',
    content: `<div class="poem">
      <p>卤味忽从旁边来，</p><p>夫学须静才须学。</p>
      <p>旧年过去乃新年，</p><p>是页无人昏睡去。</p>
      <p>一旦记恨十年休，</p><p>大钟声犹在耳边。</p>
      <p>本自风来雨也来，</p><p>但自人生风雨中。</p>
      <p>本诗千年仍传扬，</p><p>曾传祖传父传子。</p>
      <p>子传孙至诺方舟，</p><p>方舟意味恋依依。</p>
      <p>逃离地球因其燃，</p><p>大火烧尽十年衰。</p>
      <p>千年万年无记恨，</p><p>齐心协力助人帮。</p>
    </div><p class="poem-note">—— 杨梓周</p>`,
    date: '2026-09-18',
    category: '文学',
    tags: ['诗歌', '创作', '文学'],
    readTime: 2
  },
  {
    id: 3,
    title: '2026年8月26日 今日要闻速览',
    excerpt: '台风“紫檀”三次登陆广东，中央气象台发布台风橙色预警；十四届全国人大常委会第二十四次会议在京举行……',
    content: `<p>今天是2026年8月26日，以下是今日要闻速览：</p>
      <h4>🌧️ 自然灾害与极端天气</h4>
      <ul>
        <li><strong>台风“紫檀”三次登陆广东</strong>：今年第19号台风“紫檀”的中心于26日凌晨在广东湛江徐闻二次登陆，后在吴川沿海第三次登陆。随着其影响减弱，琼州海峡客滚船已于26日14时复运。</li>
        <li><strong>台风“沙德尔”进入东海</strong>：台风“沙德尔”的中心于26日早晨移入东海海面。受其影响，福建沿海57条客渡运航线停航，全省118个水工项目全部停工。</li>
        <li><strong>中央气象台发布台风橙色预警</strong>：中央气象台8月26日继续发布台风橙色预警。</li>
        <li><strong>西藏吉隆口岸发生泥石流</strong>：26日，西藏吉隆口岸附近发生泥石流灾害，可能导致人员失联，当地道路、通信、电力中断。</li>
        <li><strong>内蒙古车辆落水事故</strong>：25日发生在内蒙古兴和县山洪中的车辆落水事件，最后1名失联人员于26日被找到，确认无生命体征，事故共造成5人死亡。</li>
        <li><strong>山东微山县发布高温橙色预警</strong>：山东省济宁市微山县预计26日至27日将出现35-37℃、局部可达38℃以上的高温天气。</li>
      </ul>
      <h4>🏛️ 国内要闻</h4>
      <ul>
        <li><strong>重要会议</strong>：十四届全国人大常委会第二十四次会议在京举行，赵乐际主持；全国政协十四届常委会第十八次会议开幕，王沪宁出席。</li>
        <li><strong>高层外交</strong>：韩正会见印度国家安全顾问、中印边界问题印方特别代表多瓦尔。</li>
        <li><strong>“十五五”规划</strong>：国新办26日上午举行新闻发布会，介绍全力抓好“十五五”规划实施、加快推进新型工业化有关情况。</li>
        <li><strong>立法动态</strong>：《道路交通安全法》修订草案初审，首次将自动驾驶汽车写入法律。</li>
        <li><strong>航天发射</strong>：26日，长征六号丙遥一运载火箭成功发射，以“一箭七星”方式将银河航天三颗卫星送入轨道。</li>
      </ul>
      <h4>🌍 国际动态</h4>
      <ul>
        <li><strong>美加贸易摩擦升级</strong>：因贸易谈判未果，加拿大宣布自9月8日起对约200亿美元美国商品征收报复性关税。中国外交部回应，主张各方通过平等对话协商解决经贸关切。</li>
        <li><strong>美伊关系紧张</strong>：美国务卿称将通过封锁和新制裁加大对伊朗经济施压。另一方面，伊朗表示与阿曼就霍尔木兹海峡临时航线达成谅解。</li>
        <li><strong>中东局势与能源市场</strong>：中东地缘局势出现缓和信号，市场对原油供应中断的担忧降温，导致26日油价跌超4%。</li>
      </ul>
      <h4>💼 财经与科技</h4>
      <ul>
        <li><strong>央行操作</strong>：人民银行26日开展2395亿元7天期逆回购操作，操作利率为1.40%。</li>
        <li><strong>人工智能</strong>：中国已成功研制近200项人工智能关键标准。</li>
        <li><strong>资本市场</strong>：26日共有3只新股申购，分别为沪主板的<strong>天博智能</strong>、创业板的<strong>洛轴股份</strong>和北交所的<strong>杰锋动力</strong>。</li>
        <li><strong>国际财经</strong>：美股三大股指全线收涨，英伟达终结七连跌。</li>
      </ul>
      <h4>🎪 其他</h4>
      <ul>
        <li><strong>第二届世界人形机器人运动会</strong>于26日迎来最后一个比赛日，多个项目进行决赛。</li>
        <li><strong>2026深圳通用人工智能展</strong>于26日至28日举办。</li>
        <li><strong>全球最大游戏展Gamescom</strong>于26日至30日在德国科隆举行。</li>
        <li><strong>石家庄市教育局</strong>等部门联合印发方案，在全市中小学增设春假、秋假。</li>
        <li><strong>国家粮食和物资储备局</strong>数据显示，全国已收购小麦超9000万吨。</li>
      </ul>`,
    date: '2026-08-26',
    category: '新闻',
    tags: ['新闻', '时事', '要闻'],
    readTime: 5
  },
  {
    id: 2,
    title: '微信新功能体验',
    excerpt: '最近，微信的新版本8.0.76在iOS平台发布了更新。此次更新增加了全新语音转文字、小微AI、私密相册等灰度测试功能……',
    content: `<p>最近，微信的新版本8.0.76在iOS平台发布了更新。此次更新的版本号为8.0.76。</p>
      <p>更新日志如下：<br />* 修复了一些已知问题。</p>
      <p>虽然更新日志没有明确写更新了哪些东西。但是经过B站UP主Hi果粉的实测，微信增加了这些内容（注：均为灰度测试内容）：</p>
      <ul>
        <li>小微AI</li>
        <li>全新语音转文字</li>
        <li>拍照新增焦段</li>
        <li>私密相册</li>
        <li>个人朋友圈搜索</li>
        <li>独立未读列表</li>
      </ul>
      <p>微信修改了这些内容：<br />* 深色图标（注：深色图标仅比浅色暗了一点点）</p>
      <p>我灰测到了全新语音转文字。</p>
      <a href="https://imgchr.com/i/pmzhHGd" target="_blank">
        <img src="https://s41.ax1x.com/2026/08/22/pmzhHGd.jpg" alt="语音转文字界面" style="max-width:100%;border-radius:8px;margin:12px 0;" />
      </a>
      <p>按住白色的输入区就可以语音转文字。</p>
      <p>和以前不同的是，以前我们要用手滑到右边才能发送，现在松手就能发送。（注：以前松手是取消，现在划到右边是编辑。）</p>
      <p>这个功能给许多用户提供了便利，不过还在灰测阶段，所以并不是所有的用户都可以拥有这项功能。</p>
      <p style="color:var(--text-muted);font-size:0.9rem;">By yangzizhoudiwuxuande</p>`,
    date: '2026-08-24',
    category: '科技',
    tags: ['微信', '更新', '体验'],
    readTime: 3
  },
  {
    id: 1,
    title: '走读生的帅，你根本想象不到',
    excerpt: '每天早上六点四十，我准时推着自行车出门。校服拉链拉到顶，书包单肩挎着，刘海被晨风吹起来的那一刻——我知道，今天的帅，从第一秒就稳了。',
    content: `<p>每天早上六点四十，我准时推着自行车出门。<br />校服拉链拉到顶，书包单肩挎着，刘海被晨风吹起来的那一刻——<br />我知道，今天的帅，从第一秒就稳了。</p>
      <p>你可能觉得走读生很辛苦，每天早起，风里来雨里去。<br />但你不懂，<strong>走读生的帅，是藏在日常里的高光时刻</strong>。</p>
      <h3>场景一：校门口停车</h3>
      <p>我熟练地一个甩尾，自行车精准卡进两辆电动车之间的缝隙。<br />旁边的保安大叔冲我竖大拇指：“小伙子车技可以。”<br />我淡淡一笑，锁车，转身，校服衣角带风。<br />那一刻，我能感觉到身后几个刚下公交的同学投来羡慕的目光——<br />他们还在挤，我已经帅完了。</p>
      <h3>场景二：中午回家吃饭</h3>
      <p>走读生最大的特权，就是中午能回家。<br />别的同学在食堂排队，我已经骑上车，五分钟到家。<br />我妈端出热好的菜，我一边吃一边跟她聊学校八卦。<br />吃完饭还能躺床上眯二十分钟，醒来洗把脸，看着镜子里的自己——<br />气色红润，眼神清澈，完全没有住校生的疲惫感。<br />下午回到教室，同桌凑过来：“你中午是不是偷偷补觉了？皮肤这么好。”<br />我耸肩：“走读的快乐，你不懂。”</p>
      <h3>场景三：晚自习放学</h3>
      <p>九点半，夜风微凉。<br />我塞着耳机骑车回家，路灯把我的影子拉得很长。<br />遇到红灯停下来，单脚撑地，抬头看月亮。<br />旁边一辆私家车摇下车窗，副驾驶的阿姨探出头问：“小伙子，前面路口怎么走？”<br />我指完路，她说了声谢谢又补了句：“长得真精神。”<br />我笑笑，绿灯亮了，脚一蹬，消失在夜色里——<br />深藏功与名。</p>
      <h3>真正的帅，不只是靠脸和车技</h3>
      <p>走读这一年，我学会了规划时间。<br />早上不赖床，因为赖一分钟就可能迟到；<br />中午不磨蹭，因为家里有人在等；<br />晚上不拖延作业，因为第二天要早起，不能顶着黑眼圈见人。</p>
      <p>走读也让我有了更多独处的时刻。<br />骑车路上看日出，看街边早餐店的热气，看梧桐叶一片片变黄。<br />这些风景，住校的同学看不到。<br />我看着看着，就觉得生活真不错，心情好了，人的状态自然就帅。</p>
      <p>有同学问我：“天天来回跑，不累吗？”<br />我说：“累啊，但帅的人不怕累。”<br />其实心里想的是——<strong>走读让我更自由，自由的人自带光芒</strong>。</p>
      <p>所以，别跟我比帅。<br />你帅在精修照片里，我帅在清晨六点半的自行车上，<br />帅在家常菜的香气里，帅在晚自习后空无一人的街道上。</p>
      <p><strong>这种帅，是活的。</strong></p>`,
    date: '2026-08-22',
    category: '生活',
    tags: ['走读', '成长', '青春'],
    readTime: 4
  }
];
POSTS.sort((a, b) => new Date(b.date) - new Date(a.date));

/* ============================================================
   资源数据
   file 为纯文件名，下载时拼 /music/ 前缀
   ============================================================ */
const RESOURCES = [
  { title: '水手', subtitle: '郑智化', file: '水手.mp3' },
  { title: '星星点灯', subtitle: '郑智化', file: '星星点灯.mp3' },
  { title: '游戏人间', subtitle: '郑智化', file: '游戏人间.mp3' },
  { title: '东南苦行山', subtitle: 'MP3 音频', file: '东南苦行山.mp3' },
  { title: '云宫迅音', subtitle: '许镜清', file: '云宫迅音.mp3' },
  { title: '大海啊故乡', subtitle: '郑绪岚', file: '大海啊故乡.mp3' },
  { title: '孤勇者', subtitle: '陈奕迅', file: '孤勇者.mp3' },
  { title: 'Summer', subtitle: '久石让', file: 'Summer.mp3' },
  { title: '葫芦娃', subtitle: '儿歌', file: '葫芦娃.mp3' },
  { title: '中国人', subtitle: '刘德华', file: '中国人.mp3' }
];

/* ============================================================
   状态 & DOM
   ============================================================ */
const state = {
  posts: POSTS,
  filteredPosts: POSTS,
  currentPage: 1,
  perPage: 4,
  selectedCategory: null,
  selectedTag: null,
  searchQuery: '',
  currentPostId: null,
  view: 'list'
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const postListEl = $('#postList');
const paginationEl = $('#pagination');
const detailEl = $('#postDetail');
const detailTitle = $('#detailTitle');
const detailMeta = $('#detailMeta');
const detailContent = $('#detailContent');
const backBtn = $('#backBtn');
const searchInput = $('#searchInput');
const searchBoxEl = $('#searchBox');
const pageHeaderEl = $('#pageHeader');
const categoryListEl = $('#categoryList');
const tagListEl = $('#tagList');
const recentListEl = $('#recentList');
const pageTitle = $('#pageTitle');
const pageSubtitle = $('#pageSubtitle');
const navLinks = $$('.nav-links a');
const hamburger = $('#hamburger');
const navLinksContainer = $('#navLinks');
const themeToggle = $('#themeToggle');

/* ============================================================
   工具
   ============================================================ */
function formatDate(s) {
  return new Date(s).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getReadTime(m) {
  return `${m} 分钟阅读`;
}

function getCategoryCount(c) {
  return state.posts.filter((p) => p.category === c).length;
}

function getTagCount(t) {
  return state.posts.filter((p) => p.tags.includes(t)).length;
}

function getAllCategories() {
  return Array.from(new Set(state.posts.map((p) => p.category)));
}

function getAllTags() {
  const s = new Set();
  state.posts.forEach((p) => p.tags.forEach((t) => s.add(t)));
  return Array.from(s);
}

function getRecentPosts(n = 4) {
  return [...state.posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, n);
}

function postUrl(id) {
  return `/post/${id}/`;
}

/* ============================================================
   Toast
   ============================================================ */
let toastTimer;
function showToast(msg) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ============================================================
   下载
   ============================================================ */
function downloadTrack(file, filename) {
  const a = document.createElement('a');
  a.href = encodeURI('/music/' + file);
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => a.remove(), 100);
  showToast(`开始下载：${filename}`);
}

/* ============================================================
   渲染：文章列表
   ============================================================ */
function renderPosts() {
  const { filteredPosts, currentPage, perPage } = state;
  const total = filteredPosts.length;
  const totalPages = Math.ceil(total / perPage) || 1;
  const start = (currentPage - 1) * perPage;
  const pagePosts = filteredPosts.slice(start, start + perPage);

  if (pagePosts.length === 0) {
    postListEl.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text-muted);">
      <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
      <p style="font-size:1.1rem;">没有找到匹配的文章</p>
      <p style="font-size:0.9rem;">试试调整搜索关键词或筛选条件</p>
    </div>`;
    paginationEl.innerHTML = '';
    return;
  }

  postListEl.innerHTML = pagePosts
    .map(
      (post) => `
    <div class="post-card" data-id="${post.id}">
      <div class="post-meta">
        <span>📅 ${formatDate(post.date)}</span>
        <span>📂 ${post.category}</span>
        <span>⏱ ${getReadTime(post.readTime)}</span>
        <span class="tag">${post.tags.join(' · ')}</span>
      </div>
      <h2><a href="${postUrl(post.id)}" data-id="${post.id}">${post.title}</a></h2>
      <p class="excerpt">${post.excerpt}</p>
      <a href="${postUrl(post.id)}" class="read-more" data-id="${post.id}">继续阅读 →</a>
    </div>`
    )
    .join('');

  postListEl.querySelectorAll('.post-card').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openPost(parseInt(el.dataset.id));
    });
  });

  postListEl.querySelectorAll('a[data-id]').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      openPost(parseInt(a.dataset.id));
    });
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const { currentPage } = state;
  if (totalPages <= 1) {
    paginationEl.innerHTML = '';
    return;
  }

  let html = `<button ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">← 上一页</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  html += `<button ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">下一页 →</button>`;
  paginationEl.innerHTML = html;

  paginationEl.querySelectorAll('button[data-page]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const p = parseInt(btn.dataset.page);
      if (p >= 1 && p <= totalPages) {
        state.currentPage = p;
        renderPosts();
        document
          .querySelector('.main-content')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================
   渲染：资源页
   ============================================================ */
function renderResources() {
  const cards = RESOURCES.map(
    (r) => `
    <div class="resource-card">
      <div class="resource-head">
        <div class="resource-icon">🎵</div>
        <div style="min-width:0;">
          <div class="resource-title">${r.title}</div>
          <div class="resource-sub">${r.subtitle || 'MP3'}</div>
        </div>
      </div>
      <button class="download-btn" data-file="${r.file}" data-name="${r.title}.mp3">
        <i class="fas fa-download"></i> 下载
      </button>
    </div>`
  ).join('');

  postListEl.innerHTML = `<div class="resource-grid">${cards}</div>`;

  postListEl.querySelectorAll('.download-btn').forEach((btn) => {
    btn.addEventListener('click', () =>
      downloadTrack(btn.dataset.file, btn.dataset.name)
    );
  });
}

/* ============================================================
   渲染：文章详情
   ============================================================ */
function renderDetail(post) {
  if (!post) return;
  state.currentPostId = post.id;
  state.view = 'detail';

  detailTitle.textContent = post.title;
  detailMeta.innerHTML = `
    <span>📅 ${formatDate(post.date)}</span>
    <span>📂 ${post.category}</span>
    <span>⏱ ${getReadTime(post.readTime)}</span>
    <span class="tag">${post.tags.join(' · ')}</span>`;
  detailContent.innerHTML = post.content;

  detailEl.classList.add('open');
  postListEl.style.display = 'none';
  paginationEl.style.display = 'none';
  searchBoxEl.style.display = 'none';
  pageHeaderEl.style.display = 'none';
}

function closeDetail() {
  state.currentPostId = null;
  state.view = 'list';
  detailEl.classList.remove('open');
  postListEl.style.display = 'block';
  paginationEl.style.display = 'flex';
  searchBoxEl.style.display = 'flex';
  pageHeaderEl.style.display = 'block';
}

function openPost(id, push = true) {
  const post = state.posts.find((p) => p.id === id);
  if (!post) return;
  renderDetail(post);
  closeMobileMenu();
  if (push) history.pushState({ post: id }, '', postUrl(id));
}

/* ============================================================
   侧边栏
   ============================================================ */
function renderSidebar() {
  categoryListEl.innerHTML = getAllCategories()
    .map(
      (c) => `
    <div class="cat-item" data-category="${c}">
      <span>${c}</span>
      <span class="cat-count">${getCategoryCount(c)}</span>
    </div>`
    )
    .join('');

  categoryListEl.querySelectorAll('.cat-item').forEach((el) => {
    el.addEventListener('click', () => {
      const c = el.dataset.category;
      state.selectedCategory = state.selectedCategory === c ? null : c;
      state.selectedTag = null;
      state.currentPage = 1;
      applyFilters();
    });
    if (state.selectedCategory === el.dataset.category) {
      el.style.color = 'var(--primary)';
      el.style.fontWeight = '600';
    }
  });

  tagListEl.innerHTML = getAllTags()
    .map(
      (t) => `
    <span class="tag-chip" data-tag="${t}">${t} (${getTagCount(t)})</span>`
    )
    .join('');

  tagListEl.querySelectorAll('.tag-chip').forEach((el) => {
    el.addEventListener('click', () => {
      const t = el.dataset.tag;
      state.selectedTag = state.selectedTag === t ? null : t;
      state.selectedCategory = null;
      state.currentPage = 1;
      applyFilters();
    });
    if (state.selectedTag === el.dataset.tag) {
      el.style.background = 'var(--primary)';
      el.style.color = '#fff';
    }
  });

  recentListEl.innerHTML = getRecentPosts(4)
    .map(
      (p) => `
    <a href="${postUrl(p.id)}" data-id="${p.id}" style="font-size:0.92rem;color:var(--text-secondary);">
      ${p.title}
      <span style="display:block;font-size:0.75rem;color:var(--text-muted);">${formatDate(p.date)}</span>
    </a>`
    )
    .join('');

  recentListEl.querySelectorAll('a[data-id]').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      openPost(parseInt(a.dataset.id));
    });
  });
}

function applyFilters() {
  let r = [...state.posts];

  if (state.selectedCategory) {
    r = r.filter((p) => p.category === state.selectedCategory);
  }
  if (state.selectedTag) {
    r = r.filter((p) => p.tags.includes(state.selectedTag));
  }
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    r = r.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
    );
  }

  state.filteredPosts = r;
  state.currentPage = 1;
  renderPosts();
  renderSidebar();

  let title = '📖 我的文章';
  let subtitle = '记录走读生的日常与思考';
  if (state.selectedCategory) {
    title = `📂 ${state.selectedCategory}`;
    subtitle = `共 ${r.length} 篇文章`;
  } else if (state.selectedTag) {
    title = `🏷️ ${state.selectedTag}`;
    subtitle = `共 ${r.length} 篇文章`;
  } else if (state.searchQuery.trim()) {
    title = `🔍 搜索: "${state.searchQuery.trim()}"`;
    subtitle = `找到 ${r.length} 篇文章`;
  }
  pageTitle.textContent = title;
  pageSubtitle.textContent = subtitle;
}

/* ============================================================
   页面渲染（供路由调用）
   ============================================================ */
function setActiveNav(page) {
  navLinks.forEach((l) => l.classList.toggle('active', l.dataset.page === page));
}

function renderHome(push = true) {
  closeDetail();
  state.selectedCategory = null;
  state.selectedTag = null;
  state.searchQuery = '';
  searchInput.value = '';
  state.currentPage = 1;
  state.filteredPosts = [...state.posts];

  pageTitle.textContent = '📖 我的文章';
  pageSubtitle.textContent = '记录走读生的日常与思考';
  searchBoxEl.style.display = 'flex';
  pageHeaderEl.style.display = 'block';
  paginationEl.style.display = 'flex';

  applyFilters();
  setActiveNav('home');

  if (push) history.pushState({ page: 'home' }, '', '/');
  closeMobileMenu();
}

function renderAbout(push = true) {
  closeDetail();

  pageTitle.textContent = '👤 关于我';
  pageSubtitle.textContent = '一个走读生，热爱记录生活';

  postListEl.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:32px 36px;box-shadow:var(--shadow);">
      <p style="font-size:1.1rem;line-height:1.8;color:var(--text-secondary);">
        你好！我是 <strong style="color:var(--text);">杨梓周</strong>，一名走读生，喜欢用文字记录日常里那些闪光的小瞬间。
      </p>
      <p style="font-size:1rem;line-height:1.8;color:var(--text-secondary);margin-top:16px;">
        🚲 走读日常 · 观察生活 · 偶尔思考<br />
        ✍️ 相信 <strong>「生活里的帅，是活出来的」</strong>
      </p>
      <p style="font-size:1rem;line-height:1.8;color:var(--text-secondary);margin-top:16px;">
        这个博客就是我的小角落，记录那些风里来雨里去的日子，以及路上的风景与心情。
      </p>
      <p style="font-size:1rem;line-height:1.8;color:var(--text-secondary);margin-top:16px;">
        📬 联系我：<a href="mailto:yangzizhou2026@outlook.com">yangzizhou2026@outlook.com</a>
      </p>
    </div>`;

  paginationEl.innerHTML = '';
  paginationEl.style.display = 'none';
  searchBoxEl.style.display = 'none';
  pageHeaderEl.style.display = 'block';
  postListEl.style.display = 'block';

  setActiveNav('about');
  if (push) history.pushState({ page: 'about' }, '', '/about/');
  closeMobileMenu();
}

function renderArchives(push = true) {
  closeDetail();

  pageTitle.textContent = '📚 全部归档';
  pageSubtitle.textContent = `共 ${state.posts.length} 篇文章 · 按时间排列`;

  const sorted = [...state.posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  postListEl.innerHTML = sorted
    .map(
      (p) => `
    <div class="post-card" data-id="${p.id}" style="cursor:pointer;">
      <div class="post-meta">
        <span>📅 ${formatDate(p.date)}</span>
        <span>📂 ${p.category}</span>
        <span class="tag">${p.tags.join(' · ')}</span>
      </div>
      <h2><a href="${postUrl(p.id)}" data-id="${p.id}">${p.title}</a></h2>
    </div>`
    )
    .join('');

  paginationEl.innerHTML = '';
  paginationEl.style.display = 'none';
  searchBoxEl.style.display = 'none';
  pageHeaderEl.style.display = 'block';
  postListEl.style.display = 'block';

  postListEl.querySelectorAll('.post-card').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openPost(parseInt(el.dataset.id));
    });
  });

  postListEl.querySelectorAll('a[data-id]').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      openPost(parseInt(a.dataset.id));
    });
  });

  setActiveNav('archives');
  if (push) history.pushState({ page: 'archives' }, '', '/archives/');
  closeMobileMenu();
}

function renderResourcesPage(push = true) {
  closeDetail();

  pageTitle.textContent = '🎵 资源下载';
  pageSubtitle.textContent = `共 ${RESOURCES.length} 首曲目 · 点击按钮即可下载`;

  renderResources();

  paginationEl.innerHTML = '';
  paginationEl.style.display = 'none';
  searchBoxEl.style.display = 'none';
  pageHeaderEl.style.display = 'block';
  postListEl.style.display = 'block';

  setActiveNav('resources');
  if (push) history.pushState({ page: 'resources' }, '', '/resources/');
  closeMobileMenu();
}

/* ============================================================
   路由：根据 pathname 判断
   ============================================================ */
function handleRoute(push = false) {
  const p = window.location.pathname;

  if (/\/about\/?$/.test(p)) {
    renderAbout(push);
  } else if (/\/archives\/?$/.test(p)) {
    renderArchives(push);
  } else if (/\/resources\/?$/.test(p)) {
    renderResourcesPage(push);
  } else {
    const m = p.match(/\/post\/(\d+)\/?$/);
    if (m) {
      setActiveNav('home');
      openPost(parseInt(m[1]), push);
    } else {
      renderHome(push);
    }
  }
}

/* ============================================================
   交互
   ============================================================ */
function closeMobileMenu() {
  navLinksContainer.classList.remove('open');
  hamburger.classList.remove('open');
}

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
  hamburger.classList.toggle('open');
});

function getTheme() {
  return localStorage.getItem('theme') || 'light';
}

function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () =>
  setTheme(getTheme() === 'dark' ? 'light' : 'dark')
);
setTheme(getTheme());

searchInput.addEventListener('input', () => {
  state.searchQuery = searchInput.value;
  state.currentPage = 1;
  applyFilters();
});

backBtn.addEventListener('click', () => {
  const active = document.querySelector('.nav-links a.active');
  const page = active ? active.dataset.page : 'home';
  if (page === 'about') renderAbout();
  else if (page === 'archives') renderArchives();
  else if (page === 'resources') renderResourcesPage();
  else renderHome();
});

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    const page = link.dataset.page;
    if (page === 'home') renderHome();
    else if (page === 'about') renderAbout();
    else if (page === 'archives') renderArchives();
    else if (page === 'resources') renderResourcesPage();
  });
});

window.addEventListener('popstate', () => handleRoute(false));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.view === 'detail') {
    const active = document.querySelector('.nav-links a.active');
    const page = active ? active.dataset.page : 'home';
    if (page === 'about') renderAbout();
    else if (page === 'archives') renderArchives();
    else if (page === 'resources') renderResourcesPage();
    else renderHome();
  }
});

/* ============================================================
   初始化
   ============================================================ */
state.filteredPosts = [...state.posts];
renderSidebar();
handleRoute(false);