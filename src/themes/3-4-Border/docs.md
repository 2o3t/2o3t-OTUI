
### 边框规则

<ot-row-group>
    <ot-section :label="name.toUpperCase()+' Font Rule'" prefix="#" :level="4" v-for="(name) in otUINameMap" :key="name" section>
        <ot-color-rule-table  :actions="otUIActionMap"
            :name="name" shuxing="border">
        </ot-color-rule-table>
    </ot-section>
</ot-row-group>

