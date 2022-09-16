import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';

interface LayoutProps {
  children: ReactNode;
}

const query = graphql`
  query {
    allStrapiCategory {
      nodes {
        name
        strapiId
      }
    }
  }
`;

export default function Layout({ children }: LayoutProps) {
  const {
    allStrapiCategory: { nodes },
  } = useStaticQuery(query);

  return (
    <>
      <Header nodes={nodes} />
      {children}
    </>
  );
}
