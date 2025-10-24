---
title: 前缀和
tag:
  - LeetCode
  - 常用数据结构
---

# 前缀和

## §1.1 前缀和基础

### [1749. 任意子数组和的绝对值的最大值](https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/)

> 给你一个整数数组 `nums` 。一个子数组 `[numsl, numsl+1, ..., numsr-1, numsr]` 的 **和的绝对值** 为 `abs(numsl + numsl+1 + ... + numsr-1 + numsr)` 。
>
> 请你找出 `nums` 中 **和的绝对值** 最大的任意子数组（**可能为空**），并返回该 **最大值** 。
>
> `abs(x)` 定义如下：
>
> - 如果 `x` 是负整数，那么 `abs(x) = -x` 。
> - 如果 `x` 是非负整数，那么 `abs(x) = x` 。
>
> **示例 1：**
>
> 输入：nums = [1,-3,2,3,-4]
> 输出：5
> 解释：子数组 [2,3] 和的绝对值最大，为 abs(2+3) = abs(5) = 5 。

#### 思路

设数组$nums$的前缀和数组为$preSum$，$preSum.length() = nums.length()$

$preSum[0] = nums[0]$；

$preSum[1] = preSum[0] + nums[1]$；

$......$

$preSum[n - 1] = preSum[n - 2] + nums[n - 1]$

子数组$[i, j]$的和等于两个前缀和的差值$preSum[j] - preSum[i]$



对于当前数组$nums = [1,-3,2,3,-4]$，前缀和$preSum = [1, -2, 0, 3, -1]$

子数组$[1, 3]$的和等于两个前缀和的差值$preSum[3] - preSum[1] = 5$



本题要求$nums$中 **和的绝对值** 最大的任意子数组（**可能为空**），并返回该 **最大值** 。
因为有说是绝对值，所以只需考虑最大前缀和和最小前缀和之间的最大差值即可

#### 实现

```Java
class Solution {
    public int maxAbsoluteSum(int[] nums) {
        int sum = 0, max = 0, min = 0;
        for (int num : nums) {
            sum += num;
            max = Math.max(max, sum);
            min = Math.min(min, sum);
        }
        return max - min;
    }
}
```

