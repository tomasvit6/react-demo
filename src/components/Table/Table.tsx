import React, { forwardRef } from 'react';
import MaterialTable, { Action as MaterialAction, Column, MaterialTableProps, Options } from 'material-table';

import { Grid, makeStyles, Theme } from '@material-ui/core';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

import { Action } from './Table.types';

const defaultIcons = {
  Add: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef<SVGSVGElement, Record<string, any>>((props, ref) => <ViewColumn {...props} ref={ref} />),
};

interface StyleProps {
  tableWidth: number | string;
}

interface Props extends Omit<MaterialTableProps<any>, 'actions'> {
  width?: number;
  actions?: Action[];
}

export const Table: React.FunctionComponent<Props> = (props) => {
  const { width: customWidth = '100%', title = '', icons, actions, options, columns, ...rest } = props;
  const classes = useStyles({ tableWidth: customWidth });
  const defaultOptions: Options<any> = {
    actionsColumnIndex: -1,
    paging: true,
    pageSize: 6,
    emptyRowsWhenPaging: true,
    pageSizeOptions: [6, 12, 18],
  };

  return (
    <Grid className={classes.root}>
      <MaterialTable
        title={title}
        actions={makeActionCell(actions ?? [])}
        icons={{ ...defaultIcons, ...icons }}
        options={{ ...defaultOptions, ...options }}
        columns={withFreezingFix(columns)}
        {...rest}
      />
    </Grid>
  );

  function makeActionCell(actions: Action[]): MaterialAction<any>[] {
    const validActions =
      actions?.filter((actionCell) => actionCell.action === 'DELETE' || actionCell.action === 'EDIT') ?? [];
    const usedActions: MaterialAction<any>[] = [];

    validActions.forEach((validAction) => {
      if (validAction.action === 'EDIT') {
        usedActions.push({
          icon: (props: Record<string, any>) => <Edit {...props} />,
          tooltip: validAction.tooltip ?? 'Edit',
          disabled: validAction.disabled,
          isFreeAction: validAction.isFreeAction,
          position: validAction.position,
          onClick: validAction.onClick,
          iconProps: validAction.iconProps,
          hidden: validAction.hidden,
        });
      } else if (validAction.action === 'DELETE') {
        usedActions.push({
          icon: (props: Record<string, any>) => <DeleteOutline {...props} />,
          tooltip: validAction.tooltip ?? 'Delete',
          disabled: validAction.disabled,
          isFreeAction: validAction.isFreeAction,
          position: validAction.position,
          onClick: validAction.onClick,
          iconProps: validAction.iconProps,
          hidden: validAction.hidden,
        });
      }
    });

    return usedActions;
  }

  /**
   * Material-table data reloads causes browser freezing issues
   * https://github.com/mbrn/material-table/pull/2689
   */
  function withFreezingFix(columns: Column<any>[]) {
    return columns.map((c) => ({ ...c, tableData: undefined }));
  }
};

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: ({ tableWidth }) => tableWidth,
  },
}));
