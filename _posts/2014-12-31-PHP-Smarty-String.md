@(014_PHP)
### smarty 判断变量是字符串还是数组

``` SMARTY
{if isset($name) && $name == 'Blog'}
    {* do something *}
{elseif $name == $foo}
    {* do something *}
{/if}


{if is_array($foo) && count($foo) > 0}
    {* do a foreach loop *}
{/if}
```