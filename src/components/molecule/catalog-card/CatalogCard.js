import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../../atom/text/Text';
import Heading from '../../atom/heading/Heading';
import style from './CatalogCard.module.scss';

const CatalogCard = ({ data, LinkComponent, pathname, defaultImage, xs, sm, md, lg, colProps, cardProps }) => {
  const { children, url: rootUrl, name: title, alt = 'Descrição', imgUrl = '' } = data;
  const { classNames = '', otherCardProps } = cardProps;
  const { classNames: colClassNames = '', otherColProps } = colProps;
  const items = children && children.length ? children : null;
  const itemsClass = items ? '' : style['c-card-empty-items'];
  const imageUrl = imgUrl || defaultImage;
  const imageClass = imageUrl ? '' : style['c-card-img-fallback'];

  return (
    <Col className={`${style['col-catalog']} ${colClassNames}`} xs={xs} sm={sm} md={md} lg={lg} {...otherColProps}>
      <div className={`card-is-here ${style['c-card']} ${itemsClass} ${classNames}`} {...otherCardProps}>
        {title && <Heading level={5} title={title} bold />}
        <img className={imageClass} src={imageUrl} alt={alt} />
        {items &&
          items.map(({ id, name = '', url = '/' }, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <LinkComponent
              className={`${key === 0 ? style['c-card-first-anchor'] : ''} ${style['c-card-responsive']}`}
              key={id}
              to={pathname + url}
            >
              <Text sm> {name}</Text>
            </LinkComponent>
          ))}
        {items && (
          <div className={`${style['c-card-footer']} ${style['c-card-responsive']}`}>
            <LinkComponent to={rootUrl}>
              <Text>
                Ver tudo desta categoria
                <FontAwesomeIcon size="sm" icon={faArrowRight} />
              </Text>
            </LinkComponent>
          </div>
        )}
      </div>
    </Col>
  );
};

CatalogCard.propTypes = {
  pathname: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  LinkComponent: PropTypes.instanceOf(Object).isRequired,
  colProps: PropTypes.instanceOf(Object),
  cardProps: PropTypes.instanceOf(Object),
  defaultImage: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.number]),
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};
CatalogCard.defaultProps = {
  colProps: {},
  cardProps: {},
  defaultImage: null,
  xs: 4,
  sm: 0,
  md: 0,
  lg: 0
};

export default CatalogCard;
