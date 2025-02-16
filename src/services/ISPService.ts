import { ISPField, ISPLists } from "../common/SPEntities";

export enum LibsOrderBy {
    Id = 1,
    Title
}

/**
 * Options used to sort and filter
 */
export interface ILibsOptions {
    orderBy?: LibsOrderBy;
    baseTemplate?: number | number[];
    includeHidden?: boolean;
    filter?: string;
    contentTypeId?: string;
}

export interface ISPService {
    
    /**
     * Get the lists from SharePoint
     * @param options Options used to order and filter during the API query
     */
    getLibs(options?: ILibsOptions): Promise<ISPLists>;
    getListItems?(filterText: string, listId: string, internalColumnName: string, field: ISPField, keyInternalColumnName?: string, webUrl?: string): Promise<any[]>;
    getField: (listId: string, internalColumnName: string, webUrl?: string) => Promise<ISPField | undefined>;
}
