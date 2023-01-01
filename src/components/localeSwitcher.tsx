import SC from '@emotion/styled';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import {Icon} from './icon';

const Container = SC.div`
  margin: 0 10px;
`;

const Locale = SC.span`
  margin: 0 5px;
`;

const Img = SC(Icon)`
  :hover {
    cursor: pointer;
  }
`;

export const LocaleSwitcher = () => {
  const router = useRouter();
  const {locale, locales, pathname, query, asPath} = router;
  const list = (locales || []).filter(l => l !== locale);

  return (
    <Container>
      {list.map(locale => (
        <Locale key={locale}>
          <Link href={{pathname, query}} as={asPath} locale={locale} legacyBehavior>
            <Img name={`flags.${locale}`} size="24" />
          </Link>
        </Locale>
      ))}
    </Container>
  );
};
