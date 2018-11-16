
### 下边框规则

<ot-row-group>
    <ot-section :label="name.toUpperCase()+' Font Rule'" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border-bottom">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>



### 左边框规则

<ot-row-group>
    <ot-section :label="name.toUpperCase()+' Font Rule'" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border-left">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>

