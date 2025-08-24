---
title: 前后缀分解
tag:
  - LeetCode
  - 动态规划
---

# 前后缀分解

## [238.除自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/)

> 给你一个整数数组 `nums`，返回 数组 `answer` ，其中 `answer[i]` 等于 `nums` 中除 `nums[i]` 之外其余各元素的乘积 。
>
> 题目数据 **保证** 数组 `nums`之中任意元素的全部前缀元素和后缀的乘积都在 **32 位** 整数范围内。
>
> 请 **不要使用除法**，且在 `O(n)` 时间复杂度内完成此题。
>
> **示例 1:**
>
> 输入: nums = [1,2,3,4]
>
> 输出: [24,12,8,6]

### 思路

题目要求`answer[i]` 等于 `nums` 中除 `nums[i]` 之外其余各元素的乘积。我们可以将其分为左边`pre`和右边`suf`两个部分。

$$
pre[i]表示从nums[0]到nums[i-1]的乘积
$$

$$
pre[i]的值可以通过累乘，使用pre[i-1]*sum[i-1]快速更新值
$$

$$
suf[i]表示从nums[i+1]到nums[n-1]的乘积，suf可以使用相同方法更新
$$

$$
answer[i]=pre[i]*suf[i]
$$

```Java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] pre = new int[n];
        pre[0] = 1;
        for (int i = 1; i < n; i++) {
            pre[i] = pre[i - 1] * nums[i - 1];
        }

        int[] suf = new int[n];
        suf[n - 1] = 1;
        for (int i = n - 2; i >= 0; i--) {
            suf[i] = suf[i + 1] * nums[i + 1];
        }
        
        int[] ans = new int[n];
        for (int i = 0; i < n; i++) {
            ans[i] = pre[i] * suf[i];
        }
        return ans;
    }
}
```