import LinkTable from "@richsoni/components-link-table";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("LinkTable", module);

stories.add("default", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <LinkTable
      attributes={['Column 1', 'Column 2', 'Column 3', 'Column 4']}
      sortBy='Column 1'
      sortDir='asc'
      items={[{
        '_id': '1',
        'Column 1': 'hello',
        'Column 2': 'world',
        'Column 3': 'from',
        'Column 4': 'richsoni.com',
      } , {
        '_id': '2',
        'Column 1': 'another',
        'Column 2': 'hello',
      }]}
    />
  </div>
));
