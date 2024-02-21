import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    pictures: Attribute.Media;
  };
}

export interface ComponentsTextBlock extends Schema.Component {
  collectionName: 'components_components_text_blocks';
  info: {
    displayName: 'Text-block';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.gallery': ComponentsGallery;
      'components.text-block': ComponentsTextBlock;
    }
  }
}
