import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as n,o as l}from"./app-A7uZLuxm.js";const e={};function h(t,s){return l(),a("div",null,s[0]||(s[0]=[n(`<br><p><img src="http://cdn.leemuzi.com/weblog/jiyu.png" style="zoom:10%;">作者寄语：</p><p>线性表是数据结构中最基本、最简单、也是最常用的一种数据结构。顺序表、链表、栈、队列都是基于线性表的数据结构，包括串，也是一种特殊的线性表。</p><h2 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表"><span>线性表</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p><strong>线性表(List)</strong> 就是包含零个或多个元素的<strong>有限</strong>序列，中元素是有顺序的，若元素存在多个，则第一个元素无前驱，最后一个元素无后继，其他每个元素都有且只有一个直接前驱和直接后继，线性表中的个数n(n≥0)定义为线性表的长度，当n=0时，称线性表为空表。</p><h3 id="抽象数据类型" tabindex="-1"><a class="header-anchor" href="#抽象数据类型"><span>抽象数据类型</span></a></h3><p>线性表的抽象数据类型定义了线性表逻辑特性和操作，并不设计具体的实现细节。对于不同的应用，线性表的基本操作是不相同的，并不完全按照抽象数据类型来定义。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ADT</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> List {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    数据对象：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        D </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> { a_i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">|</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a_i ∈ ElemType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ...,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n ≥ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    数据关系：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        R </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> { </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a_i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a_{i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> |</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a_i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a_{i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} ∈ D</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ...,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    基本操作：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        InitList</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">L)：初始化线性表。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        DestroyList</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">L)：销毁线性表。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ListEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(L)：判断线性表是否为空。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ListLength</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(L)：返回线性表的长度。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        GetElem</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">e)：获取第 i 个元素。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        LocateElem</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e)：查找元素 e 的位置。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ListInsert</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e)：在第 i 个位置插入元素 e。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ListDelete</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">e)：删除第 i 个元素。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        TraverseList</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(L)：遍历线性表。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ClearList</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">L)：清空线性表。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        PriorElem</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> cur_e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pre_e)：获取 cur_e 的前驱。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        NextElem</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> cur_e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">next_e)：获取 cur_e 的后继。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="顺序存储结构" tabindex="-1"><a class="header-anchor" href="#顺序存储结构"><span>顺序存储结构</span></a></h3><p>顺序存储结构是线性表中的两种物理结构中的一种。指的是一段地址连续的存储单元，依次存储线性表的数据元素。也就是说核心特点是<strong>逻辑上相邻的元素在物理上也相邻</strong>。</p><figure><img src="http://cdn.leemuzi.com/weblog/image-20250312232240012.png" alt="顺序存储示意图" tabindex="0" loading="lazy"><figcaption>顺序存储示意图</figcaption></figure><p>很多语言中其实是通过一维数组来实现顺序存储的，数组和顺序表在概念上具有一定的相似性，但是两者并不完全相同。数组是一种数据结构，而顺序表是线性表的一种实现方式。</p><p>还可以从另一方面分辨两者。数组的长度在创建完成后一般是不变的。而线性表的长度指的是表中数据元素的<strong>个数</strong>。</p><figure><img src="http://cdn.leemuzi.com/weblog/image-20250313223736162.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>优点：</p><ul><li>不需要为表示表中元素的逻辑关系而增加额外的存储空间。</li><li>可以快速的存取表中的任一元素。</li></ul><p>缺点</p><ul><li>插入和删除操作需要移动大量元素。插入和删除的事件复杂度为O(n)，而读取仅需O(1)。</li><li>当线性表变化较大是，难以确定存储空间的容量。</li><li>造成存储空间的碎片。</li></ul><h3 id="链式存储结构" tabindex="-1"><a class="header-anchor" href="#链式存储结构"><span>链式存储结构</span></a></h3><p>链式存储结构不要求逻辑上相邻的元素在物理位置上也相邻因此它没有顺序存储结构的缺点，同时也失去了顺序表可随机存取的优点。<img align="right" src="http://cdn.leemuzi.com/weblog/image-20250313232607875.png" style="zoom:60%;"></p><p>链式存储结构的特点是用一组<strong>任意的</strong>存储单元存储线性表的数据元素，这组存储单元可以是连续的，也可以是不连续的。也就是说链表可以见缝插针式的存储。</p><p>因此为了表示每个数据元素a<sub>i</sub>与其直接后继元素a<sub>i+1</sub>的逻辑关系，a<sub>i</sub>不仅存储自己的信息，还需要额外的空间存储一个指示其直接后继的信息（即直接后继的存储位置）。</p><p>存储自己信息的位置称为<strong>数据域</strong>，存储直接后继位置的位置称为<strong>指针域</strong>。指针域中的信息称为<strong>指针</strong>或<strong>链</strong>。数据与和指针域组成数据元素a<sub>i</sub>的存储映像，称为结点。</p><div align="center"><img src="http://cdn.leemuzi.com/weblog/image-20250314211724926.png" alt="image-20250314211724926" style="zoom:80%;"></div><p>n个结点链接成一个链表就是线性表的链式存储结构。链表中的每个结点只包含一个指针域，也可称为<strong>单链表</strong>或<strong>线性链表</strong>。整个链表的存取都必须要从<strong>头指针</strong>开始进行。头指针指示链表中第一个结点的存储位置。同时，由于最后一个数据元素没有直接后继，线性表中的最后一个结点的指针为NULL</p><p>有时，为了方便对链表进行操作，会在单链表的第一个结点之前附设一个<strong>头结点</strong>，头结点的数据域可以不存储任何信息，也可以存储如线性表长度等类的附加信息。头结点的指针域存储指向第一个结点的指针。若线性表为空表，头结点的指针域指向NULL。</p><figure><img src="http://cdn.leemuzi.com/weblog/image-20250314234259929.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="链式存储结构和顺序存储结构的优缺点" tabindex="-1"><a class="header-anchor" href="#链式存储结构和顺序存储结构的优缺点"><span>链式存储结构和顺序存储结构的优缺点</span></a></h3><ul><li><strong>存储分配方式：</strong> 顺序存储结构用一组连续的存储单元依次存储线性表中的数据元素；链式存储结构用一组任意单元存储线性表中的数据元素。</li><li><strong>时间性能：</strong> 顺序存储查找性能为O(1)，插入和删除的时间复杂度为O(n)；单链表的查找时间复杂度为O(n)，插入和删除的时间复杂度为O(1)。</li><li><strong>空间性能：</strong> 顺序存储结构需要预分配存储空间，空间大小难以把控。链式存储结构不需要分配存储空间，只要有就可以分配，元素个数也不受限制。</li><li><strong>应用场景：</strong> 若线性表需要频繁查找，很少进行插入和删除操作，宜采用顺序存储结构；当线性表中元素个数变化较大或者不确定的时候，宜用单链表结构。</li></ul><h2 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h2><h3 id="抽象数据类型栈的定义" tabindex="-1"><a class="header-anchor" href="#抽象数据类型栈的定义"><span>抽象数据类型栈的定义</span></a></h3><p>栈（stack）是限定仅在表尾进行插入或删除操作的线性表。允许插入元素的一端称为栈顶（top），另一端称为栈底（bottom），不含元素的空表称为空栈。栈又称为后进先出（Last In First Out）的线性表，简称LIFO结构。栈的插入操作被称为<strong>入栈</strong>，删除操作被称为<strong>出栈</strong>。</p><figure><img src="http://cdn.leemuzi.com/weblog/image-20250316213907434.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="栈的抽象数据类型" tabindex="-1"><a class="header-anchor" href="#栈的抽象数据类型"><span>栈的抽象数据类型</span></a></h3><p>栈也是一种线性表，理论上栈具备线性表的所有特性。但是栈的插入和删除操作只能在栈顶进行操作。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ADT</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Stack {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    数据：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        元素集合：{element1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> element2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ...,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> elementN}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        栈顶指针：top</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    操作：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        initStack</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 初始化栈</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        push</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(element)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 将元素 element 入栈</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        pop</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 移除并返回栈顶元素</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        peek</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 返回栈顶元素但不移除</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 判断栈是否为空</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        isFull</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 判断栈是否已满（可选）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        size</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 返回栈的大小</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h2><h3 id="抽象数据类型队列的定义" tabindex="-1"><a class="header-anchor" href="#抽象数据类型队列的定义"><span>抽象数据类型队列的定义</span></a></h3><p>和栈相反，队列（queue）是一种先进先出（first in first out）FIFO的线性表。它只允许在表的一端进行插入，称为队尾；另一端删除元素，称为队头。</p><figure><img src="http://cdn.leemuzi.com/weblog/image-20250316220735727.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="队列的抽象数据类型" tabindex="-1"><a class="header-anchor" href="#队列的抽象数据类型"><span>队列的抽象数据类型</span></a></h3><p>同样是线性表，插入数据只能在队尾进行操作，删除操作只能在队头进行操作。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ADT</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Queue {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    数据：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        元素集合：{element1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> element2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ...,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> elementN}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        队头指针：front</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        队尾指针：rear</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    操作：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        initQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 初始化队列</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        enqueue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(element)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 将元素 element 入队</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        dequeue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 移除并返回队头元素</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        peek</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 返回队头元素但不移除</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 判断队列是否为空</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        isFull</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 判断队列是否已满（可选）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        size</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 返回队列的大小</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="串" tabindex="-1"><a class="header-anchor" href="#串"><span>串</span></a></h2><h3 id="串的定义" tabindex="-1"><a class="header-anchor" href="#串的定义"><span>串的定义</span></a></h3><p>串（string）是由零个或多个字符组成的有限序列，又叫字符串。一般记为s = &quot;a<sub>1</sub>a<sub>2</sub>a<sub>3</sub>...a<sub>n</sub>&quot;(n≥0)，s称为字符串的名，a<sub>1</sub>a<sub>2</sub>a<sub>3</sub>...a<sub>n</sub>是串的值。串中字符的数目n称为串的长度，<strong>零个字符的串称为空串</strong>，它的长度为0。串中<strong>任意个连续的字符串</strong>组成的子序列称为该串的<strong>子串</strong>。包含字串的串相应的称为主串。字符在序列中的序号称为该字符在串中的位置。字串在主串中的位置是字串的第一个字符在字符串中位置。</p><h3 id="串的抽象数据类型" tabindex="-1"><a class="header-anchor" href="#串的抽象数据类型"><span>串的抽象数据类型</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ADT</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> String {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    数据：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        字符集合：{char1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> char2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ...,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> charN}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        长度：length</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    操作：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        initString</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 初始化串</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        assign</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(source)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 赋值</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        length</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 获取长度</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 判断是否为空</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        concat</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(str)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 连接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        substring</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> length)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 获取子串</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        indexOf</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(subStr)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 查找子串</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        insert</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(pos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> str)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插入</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        delete</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> length)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 删除</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        replace</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(oldStr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> newStr)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 替换</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49)]))}const r=i(e,[["render",h],["__file","linear-list.html.vue"]]),d=JSON.parse('{"path":"/notes/structure/linear-list.html","title":"线性表","lang":"zh-CN","frontmatter":{"title":"线性表","order":2,"author":"李木子","category":["数据结构"],"tag":["线性表","栈","队列","串"],"description":"作者寄语： 线性表是数据结构中最基本、最简单、也是最常用的一种数据结构。顺序表、链表、栈、队列都是基于线性表的数据结构，包括串，也是一种特殊的线性表。 线性表 定义 线性表(List) 就是包含零个或多个元素的有限序列，中元素是有顺序的，若元素存在多个，则第一个元素无前驱，最后一个元素无后继，其他每个元素都有且只有一个直接前驱和直接后继，线性表中的个数...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/structure/linear-list.html"}],["meta",{"property":"og:site_name","content":"李木子"}],["meta",{"property":"og:title","content":"线性表"}],["meta",{"property":"og:description","content":"作者寄语： 线性表是数据结构中最基本、最简单、也是最常用的一种数据结构。顺序表、链表、栈、队列都是基于线性表的数据结构，包括串，也是一种特殊的线性表。 线性表 定义 线性表(List) 就是包含零个或多个元素的有限序列，中元素是有顺序的，若元素存在多个，则第一个元素无前驱，最后一个元素无后继，其他每个元素都有且只有一个直接前驱和直接后继，线性表中的个数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://cdn.leemuzi.com/weblog/image-20250312232240012.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T13:34:41.000Z"}],["meta",{"property":"article:author","content":"李木子"}],["meta",{"property":"article:tag","content":"线性表"}],["meta",{"property":"article:tag","content":"栈"}],["meta",{"property":"article:tag","content":"队列"}],["meta",{"property":"article:tag","content":"串"}],["meta",{"property":"article:modified_time","content":"2025-03-20T13:34:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线性表\\",\\"image\\":[\\"http://cdn.leemuzi.com/weblog/image-20250312232240012.png\\",\\"http://cdn.leemuzi.com/weblog/image-20250313223736162.png\\",\\"http://cdn.leemuzi.com/weblog/image-20250314234259929.png\\",\\"http://cdn.leemuzi.com/weblog/image-20250316213907434.png\\",\\"http://cdn.leemuzi.com/weblog/image-20250316220735727.png\\"],\\"dateModified\\":\\"2025-03-20T13:34:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李木子\\"}]}"]]},"headers":[{"level":2,"title":"线性表","slug":"线性表","link":"#线性表","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"抽象数据类型","slug":"抽象数据类型","link":"#抽象数据类型","children":[]},{"level":3,"title":"顺序存储结构","slug":"顺序存储结构","link":"#顺序存储结构","children":[]},{"level":3,"title":"链式存储结构","slug":"链式存储结构","link":"#链式存储结构","children":[]},{"level":3,"title":"链式存储结构和顺序存储结构的优缺点","slug":"链式存储结构和顺序存储结构的优缺点","link":"#链式存储结构和顺序存储结构的优缺点","children":[]}]},{"level":2,"title":"栈","slug":"栈","link":"#栈","children":[{"level":3,"title":"抽象数据类型栈的定义","slug":"抽象数据类型栈的定义","link":"#抽象数据类型栈的定义","children":[]},{"level":3,"title":"栈的抽象数据类型","slug":"栈的抽象数据类型","link":"#栈的抽象数据类型","children":[]}]},{"level":2,"title":"队列","slug":"队列","link":"#队列","children":[{"level":3,"title":"抽象数据类型队列的定义","slug":"抽象数据类型队列的定义","link":"#抽象数据类型队列的定义","children":[]},{"level":3,"title":"队列的抽象数据类型","slug":"队列的抽象数据类型","link":"#队列的抽象数据类型","children":[]}]},{"level":2,"title":"串","slug":"串","link":"#串","children":[{"level":3,"title":"串的定义","slug":"串的定义","link":"#串的定义","children":[]},{"level":3,"title":"串的抽象数据类型","slug":"串的抽象数据类型","link":"#串的抽象数据类型","children":[]}]}],"git":{"createdTime":1740063494000,"updatedTime":1742477681000,"contributors":[{"name":"lee","username":"lee","email":"li15237845367@163.com","commits":4,"url":"https://github.com/lee"}]},"readingTime":{"minutes":7.87,"words":2362},"filePathRelative":"notes/structure/linear-list.md","localizedDate":"2025年2月20日","excerpt":"<br>\\n<p><img src=\\"http://cdn.leemuzi.com/weblog/jiyu.png\\" style=\\"zoom:10%;\\">作者寄语：</p>\\n<p>线性表是数据结构中最基本、最简单、也是最常用的一种数据结构。顺序表、链表、栈、队列都是基于线性表的数据结构，包括串，也是一种特殊的线性表。</p>\\n<h2>线性表</h2>\\n<h3>定义</h3>\\n<p><strong>线性表(List)</strong> 就是包含零个或多个元素的<strong>有限</strong>序列，中元素是有顺序的，若元素存在多个，则第一个元素无前驱，最后一个元素无后继，其他每个元素都有且只有一个直接前驱和直接后继，线性表中的个数n(n≥0)定义为线性表的长度，当n=0时，称线性表为空表。</p>","autoDesc":true}');export{r as comp,d as data};
