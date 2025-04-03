import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as t,b as l,d as o,e as i,o as s}from"./app-BonrOAYJ.js";const a={};function p(c,e){return s(),n("div",null,[e[0]||(e[0]=t("br",null,null,-1)),e[1]||(e[1]=t("p",null,[t("img",{src:"http://cdn.leemuzi.com/weblog/jiyu.png",style:{zoom:"10%"}}),l("作者寄语：")],-1)),e[2]||(e[2]=t("p",null,"数据结构对于计算机专业的学生是必不可少的一门科目，也是一门不容易学好的学科，或多或少大家应该都被其折磨过。我个人认为学习数据结构是类似于养成类型的游戏的，是一个渐进的过程，需要时间和耐心，并不断的实践和复习，所以想速成基本是不太可能的。",-1)),e[3]||(e[3]=t("p",null,[l("数据结构和算法是有着密切联系的，所以如果有足够的耐心，推荐去"),t("a",{href:"https://leetcode.cn/"},"leetcode"),l("或"),t("a",{href:"https://www.nowcoder.com/"},"牛客网"),l("刷一些算法题，如果没什么计划可以选择根据"),t("a",{href:"https://leetcode.cn/circle/discuss/RvFUtj/"},"灵茶山艾府"),l("的题单刷题。")],-1)),o(" more "),e[4]||(e[4]=i('<h2 id="基本概念和术语" tabindex="-1"><a class="header-anchor" href="#基本概念和术语"><span>基本概念和术语</span></a></h2><p><strong>数据：</strong> 数据是描述客观事物的符号，是计算机中可以操作的对象，是能够被计算机识别，并输入给计算机处理的符号的集合。</p><p><strong>数据元素：</strong> 是组成数据的、有一定意义的基本单位，在计算机中通常作为整体处理，也被称为记录。</p><p><strong>数据项：</strong> 一个数据元素可以分为多个数据项，数据项是数据不可分割的最小单位。</p><p><strong>数据对象：</strong> 是性质相同的数据元素的集合，是数据的子集。</p><p><strong>数据结构：</strong> 不同数据元素之间不是独立的，是存在特定的关系的，这种关系称之为结构。所以数据结构是相互之间存在一种或多种特定关系的数据元素的集合。</p><p><strong>数据类型：</strong> 是指一组性质相同的值的集合以及定义在此集合上的一些操作的总称。</p><p><strong>抽象数据类型：</strong> 一个数学模型以及定义在该模型上的一组操作，抽象数据类型体现了程序设计中问题分解、抽象和信息隐藏的特性。</p><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><p>数据结构又可分为逻辑结构和物理结构</p><h3 id="逻辑结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构"><span>逻辑结构</span></a></h3><p>逻辑结构指的是数据对象中数据元素之间的关系。</p><ul><li><p>集合结构：集合结构中的元素除了同属于一个集合外，并不存在其他的关系。</p></li><li><p>线性结构：线性结构中的元素是一对一的关系。</p></li><li><p>树形结构：树形结构中的数据元素之间存在一种一对多的层次关系。</p></li><li><p>图形结构：图形结构的数据元素是多对多的关系。</p></li></ul><h3 id="物理结构" tabindex="-1"><a class="header-anchor" href="#物理结构"><span>物理结构</span></a></h3><p>物理结构也称为存储结构，是指数据的逻辑结构在计算机中的存储形式。存储结构可以分为<strong>顺序存储</strong>和<strong>链式存储</strong></p><ul><li><p><strong>顺序存储结构</strong> 把数据元素存放在地址连续的存储单元里，其数据间的逻辑关系和物理关系是一致的。</p></li><li><p><strong>链式存储结构</strong> 把数据元素存放在任意的存储单元里，这组存储单元可以是连续的也可以是不连续的，链式存储主要是靠数据元素中存储的下一个数据元素的地址指针来链接的。</p></li></ul><h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法"><span>算法</span></a></h2><ul><li><strong>算法的定义：</strong> 算法是解决特定问题求解步骤的描述，在计算机中表现为指令的有限序列，并且每条指令表示一个或多个操作。</li><li><strong>算法的特性：</strong><ul><li><strong>输入输出：</strong> 算法具有零个或多个输入，算法至少有一个或多个输出。</li><li><strong>有穷性：</strong> 算法在执行有限的步骤之后，自动结束不会出现无限循环，并且每一个步骤都可在可接受的时间内结束。</li><li><strong>确定性：</strong> 算法的每一个步骤都具有确定的含义，不会出现二义性。算法在一定条件下，只有一条执行路径，相同的输入只能由唯一的输出结果。</li><li><strong>可行性：</strong> 算法的每一步都必须是可行的，每一步都能够通过执行有限次数完成。</li></ul></li></ul><h2 id="算法设计的要求" tabindex="-1"><a class="header-anchor" href="#算法设计的要求"><span>算法设计的要求</span></a></h2><ul><li><strong>正确性：</strong><ul><li>算法程序没有语法错误。</li><li>算法程序对于合法的输入数据能够产生满足要求的输出结果。</li><li>算法程序对于非法的输入数据能够得出满足规格说明的结果。</li><li>算法程序对于精心选择的，甚至刁难的测试数据都有满足要求的输出结果。</li></ul></li><li><strong>可读性：</strong> 算法设计的另一目的是为了便于阅读、理解和交流。</li><li><strong>健壮性：</strong> 当输入数据不合法时，算法也能做出相关处理，而不是产生异常或者莫名其妙的结果。</li><li><strong>高效率与地存储量需求：</strong> 算法设计应该尽量满足时间效率高存储量低的需求。</li></ul>',20))])}const h=r(a,[["render",p],["__file","intro.html.vue"]]),m=JSON.parse('{"path":"/algorithm/base/intro.html","title":"初识数据结构","lang":"zh-CN","frontmatter":{"title":"初识数据结构","order":1,"author":"李木子","category":["数据结构"],"editLink":false,"description":"作者寄语： 数据结构对于计算机专业的学生是必不可少的一门科目，也是一门不容易学好的学科，或多或少大家应该都被其折磨过。我个人认为学习数据结构是类似于养成类型的游戏的，是一个渐进的过程，需要时间和耐心，并不断的实践和复习，所以想速成基本是不太可能的。 数据结构和算法是有着密切联系的，所以如果有足够的耐心，推荐去leetcode或牛客网刷一些算法题，如果没...","head":[["meta",{"property":"og:url","content":"https://github.com/Lee-mu-zi/Lee-mu-zi.github.io/algorithm/base/intro.html"}],["meta",{"property":"og:site_name","content":"Muzi Lee"}],["meta",{"property":"og:title","content":"初识数据结构"}],["meta",{"property":"og:description","content":"作者寄语： 数据结构对于计算机专业的学生是必不可少的一门科目，也是一门不容易学好的学科，或多或少大家应该都被其折磨过。我个人认为学习数据结构是类似于养成类型的游戏的，是一个渐进的过程，需要时间和耐心，并不断的实践和复习，所以想速成基本是不太可能的。 数据结构和算法是有着密切联系的，所以如果有足够的耐心，推荐去leetcode或牛客网刷一些算法题，如果没..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-03T05:16:30.000Z"}],["meta",{"property":"article:author","content":"李木子"}],["meta",{"property":"article:modified_time","content":"2025-04-03T05:16:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"初识数据结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-03T05:16:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李木子\\"}]}"]]},"headers":[{"level":2,"title":"基本概念和术语","slug":"基本概念和术语","link":"#基本概念和术语","children":[]},{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[{"level":3,"title":"逻辑结构","slug":"逻辑结构","link":"#逻辑结构","children":[]},{"level":3,"title":"物理结构","slug":"物理结构","link":"#物理结构","children":[]}]},{"level":2,"title":"算法","slug":"算法","link":"#算法","children":[]},{"level":2,"title":"算法设计的要求","slug":"算法设计的要求","link":"#算法设计的要求","children":[]}],"git":{"createdTime":1740927331000,"updatedTime":1743657390000,"contributors":[{"name":"lee","username":"lee","email":"li15237845367@163.com","commits":6,"url":"https://github.com/lee"}]},"readingTime":{"minutes":4.63,"words":1388},"filePathRelative":"algorithm/base/intro.md","localizedDate":"2025年3月2日","excerpt":"<br>\\n<p><img src=\\"http://cdn.leemuzi.com/weblog/jiyu.png\\" style=\\"zoom:10%;\\">作者寄语：</p>\\n<p>数据结构对于计算机专业的学生是必不可少的一门科目，也是一门不容易学好的学科，或多或少大家应该都被其折磨过。我个人认为学习数据结构是类似于养成类型的游戏的，是一个渐进的过程，需要时间和耐心，并不断的实践和复习，所以想速成基本是不太可能的。</p>\\n<p>数据结构和算法是有着密切联系的，所以如果有足够的耐心，推荐去<a href=\\"https://leetcode.cn/\\">leetcode</a>或<a href=\\"https://www.nowcoder.com/\\">牛客网</a>刷一些算法题，如果没什么计划可以选择根据<a href=\\"https://leetcode.cn/circle/discuss/RvFUtj/\\">灵茶山艾府</a>的题单刷题。</p>\\n","autoDesc":true}');export{h as comp,m as data};
