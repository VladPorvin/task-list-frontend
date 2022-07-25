import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

const uri = environment.graphql_uri;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: new HttpLink({ uri: uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
