import * as React from 'react';
import styles from './TabbedTiles.module.scss';
import { ITabbedTilesProps } from './ITabbedTilesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TabbedTiles extends React.Component<ITabbedTilesProps, {}> {
  public render(): React.ReactElement<ITabbedTilesProps> {
    return (
      <div className={ styles.tabbedTiles }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to our web part!!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
