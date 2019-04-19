import * as React from 'react';
import styles from '../TabbedTiles.module.scss';
import { ITabbedTilesProps } from './ITabbedTilesProps';
import { groupBy, findIndex } from '@microsoft/sp-lodash-subset';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { sp } from '@pnp/sp';
import tile from '../Tile/Tile';

export interface ITabbedTilesState {
  listItemsGroupedByCategory: _.Dictionary<any[]>;
}

export default class TabbedTiles extends React.Component<ITabbedTilesProps, ITabbedTilesState> {

  public componentDidMount(): void {
    this._getAndGroupInternalProjectItems().then((res: _.Dictionary<any[]>) => {
      this.setState({
        listItemsGroupedByCategory: res
      });
      console.log(this.state.listItemsGroupedByCategory);
    });
  }

  public render(): React.ReactElement<ITabbedTilesProps> {
    return (
      <div>
        <Pivot>
        {this.state && Object.keys(this.state.listItemsGroupedByCategory).map((item, index) => 
          <PivotItem linkText={item} key={index}>
            <tile>
              
            </tile>
          </PivotItem>
        )}
        </Pivot>
      </div>
    );
  }

  private _getAndGroupInternalProjectItems(): Promise<_.Dictionary<any[]>> {
    return sp.web.lists.getByTitle("Tiles List").items.get().then((res: any[]) => groupBy(res, 'itemCategory'));
  }
}
