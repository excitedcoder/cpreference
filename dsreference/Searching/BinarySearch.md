---
layout: default
title: Binary Search
nav_order: 2
parent: Searching
---

# {{ page.title }}

```c
#include <stdio.h>

int main()
{
    int a[100], first, last, mid, x, i, j, n, tmp;
    printf("Enter Array size: ");
    scanf("%d",&n);
    
	printf("Enter Elements into array in Sorted Order: \n");
	for(i=0;i<n;i++)
		scanf("%d",&a[i]);
		
	printf("\nEnter Element to search: ");
	scanf("%d",&x);

	first=0;
	last=4;
	mid = (first+last)/2;
	
	while(first <= last)
	{
		if(x == a[mid])
		{
			printf("\nElement found at: %d position", mid+1);
			break;
		}
		else if(x > a[mid])
		{
			first = mid + 1;
		}
		else
		{
			last = mid - 1;
		}
		mid = (first+last)/2;
	}
	if (first > last)
		printf("Element not found");
		
	return 0;
}
```