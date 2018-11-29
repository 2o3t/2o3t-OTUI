# OtDialog Service API

## 实例方法

调用 OtDialog 或 this.$otDialog 会返回当前 OtDialog 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 方法名 | 说明 |
| --- | --- |
| close(id, userOnClose) | 关闭当前的 OtDialog |
| alert(options) | alert样式的 OtDialog |
| confirm(options) | confirm样式的 OtDialog |
| prompt(options) | prompt样式的 OtDialog |
