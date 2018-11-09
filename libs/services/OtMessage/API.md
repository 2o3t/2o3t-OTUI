# OtMessage Service API

## 实例方法

调用 OtMessage 或 this.$otMessage 会返回当前 OtMessage 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 方法名 | 说明 |
| --- | --- |
| close(id, userOnClose) | 关闭当前的 Message |
| closeAll() | 关闭所有的 Message |
| success(options) | success样式的 Message |
| warning(options) | warning样式的 Message |
| info(options) | info样式的 Message |
| error(options) | error样式的 Message |
| question(options) | question样式的 Message |
