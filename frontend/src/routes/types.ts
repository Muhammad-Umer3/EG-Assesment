import React from 'react'

export interface RouteInfo {
  element: React.JSX.Element;
  path: string;
  guarded?: boolean;
  param?: string;
}
