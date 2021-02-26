import { Action as MaterialAction } from 'material-table';

export type ActionName = 'EDIT' | 'DELETE';

export interface Action extends Omit<MaterialAction<any>, 'icon'> {
  action: ActionName;
}
