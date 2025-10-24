---
title: 不定长滑动窗口
tag:
  - LeetCode
  - 滑动窗口与双指针
---

# 不定长滑动窗口

## [3634. 使数组平衡的最少移除数目](https://leetcode.cn/problems/minimum-removals-to-balance-array/){#3634}

> 给你一个整数数组 `nums` 和一个整数 `k`。
>
> 如果一个数组的 **最大** 元素的值 **至多** 是其 **最小** 元素的 `k` 倍，则该数组被称为是 **平衡** 的。
>
> 你可以从 `nums` 中移除 **任意** 数量的元素，但不能使其变为 **空** 数组。
>
> 返回为了使剩余数组平衡，需要移除的元素的 **最小** 数量。
>
> **注意：** 大小为 1 的数组被认为是平衡的，因为其最大值和最小值相等，且条件总是成立。
>
> **示例 1:**
>
> **输入：** nums = [2,1,5], k = 2
>
> **输出：** 1
>
> **解释：**
>
> - 移除 `nums[2] = 5` 得到 `nums = [2, 1]`。
> - 现在 `max = 2`, `min = 1`，且 `max <= min * k`，因为 `2 <= 1 * 2`。因此，答案是 1。

### 思路

如果数组中的$min*k≥max$，则该数组被称为是 **平衡** 的。

因此，我们无需关注窗口中的顺序，可以先对数组进行排序，方便获取窗口中的
$$
min=nums[left]
$$

$$
max=nums[i]
$$

如果滑动窗口目前的$min*k<max$，$left$向右移动，直到符合平衡条件。

题目要求移除最小数量的元素，使数组达到平衡，也就是说，要获取平衡窗口的最大长度，然后用总长度减去窗口最大长度即可。

![image-20250819124507097](http://cdn.leemuzi.com/image-20250819124507097.png)

### 实现

```Java
class Solution {
    public int minRemoval(int[] nums, int k) {
        Arrays.sort(nums);
        int maxSave = 0;
        int left = 0;
        for (int i = 0; i < nums.length; i++) {
            while ((long)nums[left] * k < nums[i]) {
                left++;
            }
            maxSave = Math.max(maxSave, i - left + 1);
        }
        return nums.length - maxSave;
    }
}
```

## [1208. 尽可能使字符串相等](https://leetcode.cn/problems/get-equal-substrings-within-budget/) 

> 给你两个长度相同的字符串，`s` 和 `t`。
>
> 将 `s` 中的第 `i` 个字符变到 `t` 中的第 `i` 个字符需要 `|s[i] - t[i]|` 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。
>
> 用于变更字符串的最大预算是 `maxCost`。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。
>
> 如果你可以将 `s` 的子字符串转化为它在 `t` 中对应的子字符串，则返回可以转化的最大长度。
>
> 如果 `s` 中没有子字符串可以转化成 `t` 中对应的子字符串，则返回 `0`。
>
> 示例 1：
>
> 输入：s = "abcd", t = "bcdf", maxCost = 3
> 输出：3
> 解释：s 中的 "abc" 可以变为 "bcd"。开销为 3，所以最大长度为 3。

### 思路

这个题的思路与[3634](#3634)是一样的，就不在多赘述。

### 实现

```java
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int maxLen = 0;
        int left = 0;
        char[] sCharArray = s.toCharArray();
        char[] tCharArray = t.toCharArray();
        int sum = 0;
        for (int i = 0; i < tCharArray.length; i++) {
            sum += Math.abs(sCharArray[i] - tCharArray[i]);
            while (sum > maxCost) {
                sum -= Math.abs(sCharArray[left] - tCharArray[left]);
                left++;
            }
            maxLen = Math.max(maxLen, i - left + 1);
        }

        return maxLen;
    }
}
```

