const YOUTUBEMATCH_URL = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
const VIMEOMATCH_URL = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/; // eslint-disable-line no-useless-escape
const APARATMATCH_URL = /^https?:\/\/(?:www\.)?aparat\.com\/v\/([^\/]+)\/?$/;

export function isYoutube(url: string): boolean {
  return YOUTUBEMATCH_URL.test(url);
}
export function isVimeo(url: string): boolean {
  return VIMEOMATCH_URL.test(url);
}
export function isAparat(url: string): boolean {
  return APARATMATCH_URL.test(url);
}

export type SourceType = 'youtube' | 'vimeo' | 'aparat';
export interface SourceResult {
  srcID: string;
  srcType: SourceType;
  url: string;
}

export function getAparatSrc(url: string): SourceResult {
  const id = url && url.match(APARATMATCH_URL)![1];
  return {
    srcID: id,
    srcType: 'aparat',
    url,
  };
}

export function getYoutubeSrc(url: string): SourceResult {
  const id = url && url.match(YOUTUBEMATCH_URL)![1];
  return {
    srcID: id,
    srcType: 'youtube',
    url,
  };
}
export function getVimeoSrc(url: string): SourceResult {
  const id = url.match(VIMEOMATCH_URL)![3];
  return {
    srcID: id,
    srcType: 'vimeo',
    url,
  };
}
