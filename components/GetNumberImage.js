import Image from 'next/image';
import PropTypes from 'prop-types';

export default function GetNumberImage({ numb }) {
  let url;
  switch (numb) {
    case 0:
      url = 'zero_iepyh1';
      break;

    case 2:
      url = 'two_jbna4l';
      break;

    case 16:
      url = 'sixteen_uknw8v';
      break;

    case 13:
      url = 'thirteen_kbwuaj';
      break;

    case 12:
      url = 'twelve_e6riox';
      break;

    case 3:
      url = 'three_tk6dat';
      break;

    case 10:
      url = 'ten_zo9epe';
      break;

    case 6:
      url = 'six_dpwjqp';
      break;

    case 7:
      url = 'seven_wxuqag';
      break;

    case 9:
      url = 'nine_jih9t4';
      break;

    case 14:
      url = 'fourteen_ioozpc';
      break;

    case 1:
      url = 'one_rk0wex';
      break;

    case 17:
      url = 'seventeen_l63j3r';
      break;

    case 19:
      url = 'nineteen_vgtpmh';
      break;

    case 4:
      url = 'four_w9nalf';
      break;

    case 11:
      url = 'eleven_z1cao3';
      break;

    case 15:
      url = 'fifteen_tjanjt';
      break;

    case 18:
      url = 'eighteen_o4x8f3';
      break;

    case 5:
      url = 'five_tyagxv';
      break;

    case 8:
      url = 'eight_lc5dt9';
      break;

    default:
      url = 'zero_iepyh1';
      break;
  }
  return (
    <Image
      priority
      src={`/caracol/${url}.svg`}
      height={122 / 2}
      width={254 / 2}
      alt={`${numb} hierogplyph`}
    />
  );
}

GetNumberImage.propTypes = {
  numb: PropTypes.number,
};
