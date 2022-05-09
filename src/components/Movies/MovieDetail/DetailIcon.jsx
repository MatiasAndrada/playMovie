
import React from 'react';
import { GenreSVG } from '../../../assets/svg/iconsdetail/genre';
import { LanguageSVG } from '../../../assets/svg/iconsdetail/language';
import { RuntimeSVG } from '../../../assets/svg/iconsdetail/clock_hour';
import { ActorsSVG } from '../../../assets/svg/iconsdetail/actors';
import { DirectorSVG } from '../../../assets/svg/iconsdetail/director';

const DetailIcon = (data) => {
  return (
    <div className="container__item">
              <div className="box__item">
                <GenreSVG className="item__img" width="32px"/>
                <p className="item__text">{data.Genre}</p>
              </div>

              <div className="box__item">
                <LanguageSVG width="32px"/>
                <p className="item__text">{data.Lenguage}</p>
              </div>

              <div className="box__item">
                <RuntimeSVG width="32px"/>
                <p className="item__text">{data.Runtime}</p>
              </div>

              <div className="box__item">
                <ActorsSVG width="32px"/>
                <p className="item__text">{data.Actors}</p>
              </div>

              <div className="box__item">
                <DirectorSVG width="32px"/>
                <p className="item__text">{data.Director}</p>
              </div>
            </div>
  )
}

export default DetailIcon