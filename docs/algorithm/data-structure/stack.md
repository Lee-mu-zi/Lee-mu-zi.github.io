---
title: 栈
tag:
  - LeetCode
  - 常用数据结构
---

# 栈

## 基础

### [3561. 移除相邻字符](https://leetcode.cn/problems/resulting-string-after-adjacent-removals/)

> 给你一个由小写英文字母组成的字符串 `s`。
>
> 你 **必须** 在字符串 `s` 中至少存在两个 **连续** 字符时，反复执行以下操作：
>
> - 移除字符串中 **最左边** 的一对按照字母表 **连续** 的相邻字符（无论是按顺序还是逆序，例如 `'a'` 和 `'b'`，或 `'b'` 和 `'a'`）。
> - 将剩余字符向左移动以填补空隙。
>
> 当无法再执行任何操作时，返回最终的字符串。
>
> **注意：**字母表是循环的，因此 `'a'` 和 `'z'` 也视为连续。
>
> **示例 1：**
>
> **输入:** s = "abc"
>
> **输出:** "c"
>
> **解释:**
>
> - 从字符串中移除 `"ab"`，剩下 `"c"`。
> - 无法进行进一步操作。因此，所有可能移除操作后的最终字符串为 `"c"`。

#### 思路

#### 实现

```Java
class Solution {
    public String resultingString(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (int i = 0; i < s.length(); i++) {
            if (!stack.isEmpty() && (Math.abs(stack.peek() - s.charAt(i)) == 1 || Math.abs(stack.peek() - s.charAt(i)) == 25)) {
                stack.pop();
            } else {
                stack.push(s.charAt(i));
            }
        }
        StringBuilder builder = new StringBuilder();
        stack.forEach(builder::append);
        return builder.reverse().toString();
    }
}
```

