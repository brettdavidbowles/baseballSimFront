declare module '*.gql' {
  import {DocumentNode} from 'gql';

  const value: DocumentNode;
  export = value;
}