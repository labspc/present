import { visit } from 'unist-util-visit';

export function addZoomableClass() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      node.type = 'html';
      node.value = `<img src="${node.url}" alt="${node.alt}" class="zoomable" />`;
    });
  };
}

export function convertVideoLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (node.url.endsWith('.mov') || node.url.endsWith('.mp4')) {
        node.type = 'html';
        node.value = `<video controls><source src="${node.url}" type="video/mp4"></video>`;
      }
    });
  };
}