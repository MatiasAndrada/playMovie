
import React from 'react';
import  GenreSVG  from '../../../../assets/svg/iconsdetail/genre.svg';
import { LanguageSVG } from '../../../../assets/svg/iconsdetail/language';
import { RuntimeSVG } from '../../../../assets/svg/iconsdetail/clock_hour';
import { ActorsSVG } from '../../../../assets/svg/iconsdetail/actors';
import { DirectorSVG } from '../../../../assets/svg/iconsdetail/director';

const DetailIcon = (data) => {
  return (
<div className="flex justify-center space-x-4 mt-4">
      <div className="flex items-center">
        <GenreSVG className="w-6 h-6" />
        <p className="text-xs text-gray-500">{data.Genre}</p>
      </div>

      <div className="flex items-center">
        <LanguageSVG className="w-6 h-6" />
        <p className="text-xs text-gray-500">{data.Language}</p>
      </div>

      <div className="flex items-center">
        <RuntimeSVG className="w-6 h-6" />
        <p className="text-xs text-gray-500">{data.Runtime}</p>
      </div>

      <div className="flex items-center">
        <ActorsSVG className="w-6 h-6" />
        <p className="text-xs text-gray-500">{data.Actors}</p>
      </div>

      <div className="flex items-center">
        <DirectorSVG className="w-6 h-6" />
        <p className="text-xs text-gray-500">{data.Director}</p>
      </div>
    </div>
  )
}

export default DetailIcon