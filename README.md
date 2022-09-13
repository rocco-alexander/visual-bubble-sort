# visual-bubble-sort
A simple program written in HTML CSS and JS
Demonstration Below:

https://user-images.githubusercontent.com/99561315/189980983-0581d9d1-05b9-4b63-9376-5029e36b5601.mp4

The implementation is rater simple. The bars are created and dynamically loaded into a container which is using CSS flexbox. 
When the user selects SORT, the bubble sort algorithm is applied to the children of the container, which resolves to an array of divs of class “bar”.
When the left bar is taller than the bar to the right, it is removed from the children and appended to the right of the bar that it was being compared to. Thanks to CSS flexbox, the repositioning of the children is handled all by itself. 
