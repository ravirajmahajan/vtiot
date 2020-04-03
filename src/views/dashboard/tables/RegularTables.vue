<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Asset Reports"
      link="components/simple-tables"
    />

    <base-material-card
      icon="mdi-clipboard-text"
      title="Assets Out Of Network"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              DeviceID
            </th>
            <th class="primary--text">
              Last Message Time
            </th>
            <th class="primary--text">
              Location
            </th>
            <th class="primary--text">
              POI
            </th>
            <th class="text-right primary--text">
              Cost
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>190</td>
            <td>Thu Apr 02 2020 17:23:41</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td class="text-right">
              $36,738
            </td>
          </tr>

          <tr>
            <td>228</td>
            <td>Thu Apr 01 2020 17:23:41</td>
            <td>Curaçao</td>
            <td>Sinaas-Waas</td>
            <td class="text-right">
              $23,789
            </td>
          </tr>

          <tr>
            <td>435</td>
            <td>Thu Apr 01 2020 17:23:41</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td class="text-right">
              $56,142
            </td>
          </tr>

          <tr>
            <td>801</td>
            <td>Thu Apr 02 2020 17:23:41</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td class="text-right">
              $38,735
            </td>
          </tr>

          <tr>
            <td>598</td>
            <td>Thu Apr 02 2020 19:23:41</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td class="text-right">
              $63,542
            </td>
          </tr>

          <tr>
            <td>602</td>
            <td>Thu Apr 02 2020 17:23:41</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td class="text-right">
              $78,615
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Assets With Low Battery"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>DeviceID</th>
            <th>POI</th>
            <th>Last Message Time</th>
            <th>Battery Status</th>
            <th class="text-right">
              Salary
            </th>
          </tr>
        </thead>

        <tbody>
        <tr>
          <td>190</td>
          <td>Thu Apr 02 2020 17:23:41</td>
          <td>Niger</td>
          <td>Oud-Turnhout</td>
          <td class="text-right">
            $36,738
          </td>
        </tr>

        <tr>
          <td>228</td>
          <td>Thu Apr 01 2020 17:23:41</td>
          <td>Curaçao</td>
          <td>Sinaas-Waas</td>
          <td class="text-right">
            $23,789
          </td>
        </tr>

        <tr>
          <td>435</td>
          <td>Thu Apr 01 2020 17:23:41</td>
          <td>Netherlands</td>
          <td>Baileux</td>
          <td class="text-right">
            $56,142
          </td>
        </tr>

        <tr>
          <td>801</td>
          <td>Thu Apr 02 2020 17:23:41</td>
          <td>Korea, South</td>
          <td>Overland Park</td>
          <td class="text-right">
            $38,735
          </td>
        </tr>

        <tr>
          <td>598</td>
          <td>Thu Apr 02 2020 19:23:41</td>
          <td>Malawi</td>
          <td>Feldkirchen in Kärnten</td>
          <td class="text-right">
            $63,542
          </td>
        </tr>

        <tr>
          <td>602</td>
          <td>Thu Apr 02 2020 17:23:41</td>
          <td>Chile</td>
          <td>Gloucester</td>
          <td class="text-right">
            $78,615
          </td>
        </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>
