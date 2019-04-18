import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'TabbedTilesWebPartStrings';
import TabbedTiles from './components/TabbedTiles';
import { ITabbedTilesProps } from './components/ITabbedTilesProps';

/**  Excel Formulas Tab, YELLOW column  */

export interface ITabbedTilesWebPartProps {
  description: string;
  listDefinition: string;
  listWebURL: string;
  listTitle: string;
  defaultTab: string;
  colTitleText: string;
  colHoverText: string;
  colCategory: string;
  colColor: string;
  colSize: string;
  colGoToLink: string;
  colOpenBehaviour: string;
  colImageLink: string;
  colSort: number;
  
}

export default class TabbedTilesWebPart extends BaseClientSideWebPart<ITabbedTilesWebPartProps> {

  /**  Excel Formulas Tab, BLUE column  */
  public render(): void {
    const element: React.ReactElement<ITabbedTilesProps > = React.createElement(
      TabbedTiles,
      {
        description: this.properties.description,
        listDefinition: this.properties.listDefinition,
        listWebURL: this.properties.listWebURL,
        listTitle: this.properties.listTitle,
        defaultTab: this.properties.defaultTab,
        colTitleText: this.properties.colTitleText,
        colHoverText: this.properties.colHoverText,
        colCategory: this.properties.colCategory,
        colColor: this.properties.colColor,
        colSize: this.properties.colSize,
        colGoToLink: this.properties.colGoToLink,
        colOpenBehaviour: this.properties.colOpenBehaviour,
        colImageLink: this.properties.colImageLink,
        colSort: this.properties.colSort,
        
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {	
                  label: strings.description
                }),	
                PropertyPaneTextField('listDefinition', {	
                  label: strings.listDefinition
                }),	
                PropertyPaneTextField('listWebURL', {	
                  label: strings.listWebURL
                }),	
                PropertyPaneTextField('listTitle', {	
                  label: strings.listTitle
                }),	
                PropertyPaneTextField('defaultTab', {	
                  label: strings.defaultTab
                }),	
                PropertyPaneTextField('colTitleText', {	
                  label: strings.colTitleText
                }),	
                PropertyPaneTextField('colHoverText', {	
                  label: strings.colHoverText
                }),	
                PropertyPaneTextField('colCategory', {	
                  label: strings.colCategory
                }),	
                PropertyPaneTextField('colColor', {	
                  label: strings.colColor
                }),	
                PropertyPaneTextField('colSize', {	
                  label: strings.colSize
                }),	
                PropertyPaneTextField('colGoToLink', {	
                  label: strings.colGoToLink
                }),	
                PropertyPaneTextField('colOpenBehaviour', {	
                  label: strings.colOpenBehaviour
                }),	
                PropertyPaneTextField('colImageLink', {	
                  label: strings.colImageLink
                }),	
              
              ]
            }
          ]
        }
      ]
    };
  }
}
