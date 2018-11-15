
### 边框色规则

### 总边框规则

<ot-row-group>
    <ot-section :label="`${name.toUpperCase()} Font Rule`" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>



### 上边框规则

<ot-row-group>
    <ot-section :label="`${name.toUpperCase()} Font Rule`" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border-top">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>



### 右边框规则

<ot-row-group>
    <ot-section :label="`${name.toUpperCase()} Font Rule`" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border-right">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>



### 下边框规则

<ot-row-group>
    <ot-section :label="`${name.toUpperCase()} Font Rule`" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border-down">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>



### 左边框规则

<ot-row-group>
    <ot-section :label="`${name.toUpperCase()} Font Rule`" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border-left">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>

