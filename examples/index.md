# Demo

---

## 使用

<input class="adjust" value="Change this text and watch this field adjusting">

<style>
.adjust {
    transition: width .15s;
}
</style>

````javascript
seajs.use(['jquery','index'], function($, iscaler) {
     iscaler($('.adjust'), 10, 100, 600);
});
````
