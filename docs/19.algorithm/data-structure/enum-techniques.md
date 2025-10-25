---
title: 常用枚举技巧
tag:
  - LeetCode
  - 常用数据结构
---

# 常用枚举技巧

## [面试题 16.24. 数对和](https://leetcode.cn/problems/pairs-with-sum-lcci/)

> 设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。
>
> 示例 1：
>
> 输入：nums = [5,6,5], target = 11
>
> 输出：[[5,6]]

### 思路

### 实现

```Java
class Solution {
    public List<List<Integer>> pairSums(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            int redu = target - num;
            Integer temp = map.getOrDefault(redu, 0);
            if(temp != 0 && redu != 0){
                ArrayList<Integer> list = new ArrayList<>();
                map.put(redu, temp - 1);
                map.put(num, map.getOrDefault(num, 1) - 1);
                list.add(num);
                list.add(redu);
                res.add(list);
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return res;
    }
}
```

