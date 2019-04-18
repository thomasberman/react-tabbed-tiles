
/** This is a description of the foo function. 
 * listDefinition would be choice defined in ListMapping.json
 *      it would pre-populate the column mapping
 * listWebURL would default empty (maps to current site), but could put in link to other site
 *      should be able to recognize full url or /sites/.... format
 * listTitle could be text or lookup to list of lists in the site from listWebURL
 *      
 * all interface starting with "col" represent the columns in the ListMapping of columns
*/

/**  Excel Formulas Tab, YELLOW column  */
export interface ITabbedTilesProps {
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

/**

 */
