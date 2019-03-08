import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones} from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

import {faApple} from '@fortawesome/free-brands-svg-icons'
import {faSpotify} from '@fortawesome/free-brands-svg-icons'
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faThList} from '@fortawesome/free-solid-svg-icons'
import { faTh} from '@fortawesome/free-solid-svg-icons'
import { faCompactDisc} from '@fortawesome/free-solid-svg-icons'
import { faSortUp} from '@fortawesome/free-solid-svg-icons'
import { faSortDown} from '@fortawesome/free-solid-svg-icons'

export const Apple = (props: any) => <FontAwesomeIcon icon={faApple} {...props} />;
export const Bars = (props: any) => <FontAwesomeIcon icon={faBars} {...props} />;
export const CompactDisc = (props: any) => <FontAwesomeIcon icon={faCompactDisc} {...props} />;
export const Envelope  = (props:any) => <FontAwesomeIcon icon={faEnvelopeSquare} {...props} />;
export const Facebook = (props: any) => <FontAwesomeIcon icon={faFacebook} {...props} />;
export const Github = (props: any) => <FontAwesomeIcon icon={faGithub} {...props} />;
export const Headphones = (props: any) => <FontAwesomeIcon icon={faHeadphones} {...props} />;
export const SortDown = (props: any) => <FontAwesomeIcon icon={faSortDown} {...props} />;
export const SortUp = (props: any) => <FontAwesomeIcon icon={faSortUp} {...props} />;
export const Soundcloud = (props: any) => <FontAwesomeIcon icon={faSoundcloud} {...props} />;
export const Spotify = (props: any) => <FontAwesomeIcon icon={faSpotify} {...props} />;
export const Th = (props: any) => <FontAwesomeIcon icon={faTh} {...props} />;
export const ThList = (props: any) => <FontAwesomeIcon icon={faThList} {...props} />;
export const TimesCircle = (props: any) => <FontAwesomeIcon icon={faTimesCircle} {...props} />;
export const Twitter = (props: any) => <FontAwesomeIcon icon={faTwitter} {...props} />;