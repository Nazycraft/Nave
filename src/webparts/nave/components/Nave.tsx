import * as React from 'react';
import styles from './Nave.module.scss';
import { INaveProps } from './INaveProps';
import { Nav, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';



var NavStyles = function (props) {
  var theme = props.theme, isDisabled = props.isDisabled, isSelected = props.isSelected, isGroup = props.isGroup, isLink = props.isLink, _a = props.navHeight, navHeight = _a === void 0 ? 36 : _a;
  var palette = theme.palette;
  return {
    root:[{
      width:380,
      backgroundColor: '#F3F2F1',
    
    }
    ],
      link: [
          {  
            backgroundColor: "#F3F2F1",
              height: navHeight,
              lineHeight: navHeight + "px",
              fontSize:"18px",
            
          },
          !isDisabled && {
              selectors: {
                  '.ms-Nav-compositeLink:hover &': {
                      backgroundColor: palette.neutralLighterAlt
                  }
              }
          },
          isSelected && {
              backgroundColor: "#E1E1E1",
              'font-weight':"bold",
              color:"#00B0AD",
            selectors:{
              '&:after':{
                borderLeft:"4px solid #00B0AD",             
              }
            }
          }
         
      ],
      chevronButton: [
          {
              lineHeight: navHeight + "px",
              selectors: {
                  '&:hover': {
                      backgroundColor: palette.neutralLighterAlt
                  },
                  '$compositeLink:hover &': {
                      backgroundColor: palette.neutralLighterAlt
                  }
              }
          },
          isGroup && {
              height: navHeight
          },
          isLink && {
              height: navHeight - 2
          }
      ],
      chevronIcon: {
          height: navHeight,
          lineHeight: navHeight + "px"
      }
  };
};



const stackTokens: IStackTokens = { childrenGap: 0 };
const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        key: 'Inicio',
        name: 'Inicio',
        url: 'https://autogiga.sharepoint.com/sites/onboarding',
        
      },
      {
        key: 'Mision',
        name: 'Misión & Visión',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/mission-vision.aspx',
      },
      {
        key: 'Localidades',
        name: 'Localidades',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/locations.aspx',
      },
      {
        key: 'Staff',
        name: 'Áreas Staff',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/Our-teams.aspx',
      },
      {
        key: 'Operativas',
        name: 'Áreas Operativas',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/our-teams2.aspx',
      },
      {
        key: 'Lideres',
        name: 'Los Líderes',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/Our-leadership.aspx',
      },

      {
        key: 'Beneficios',
        name: 'Beneficios',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/benefits.aspx',
      },
      {
        key: 'Temas',
        name: 'Procedimientos',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/additionals.aspx',
      },
      {
        key: 'FAQS',
        name: 'FAQS',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/Frequently-asked-questions.aspx',
      },
      {
        key: 'Contactanos',
        name: 'Contáctanos',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/Canal-abierto-de-comunicaci%C3%B3n.aspx',
      },
      {
        key: 'Redes',
        name: 'Redes Sociales',
        url: 'https://autogiga.sharepoint.com/sites/onboarding/SitePages/sharing.aspx',
      },
    ],

  }
];


export default class SpfxReactRouter extends React.Component<INaveProps, {}> {

  public render(): React.ReactElement<INaveProps> {
    return (
      <div  className={styles.nave}>
        
        <Stack horizontal tokens={stackTokens}>
         <Nav  styles={NavStyles}  ariaLabel="Nav example similiar to one found in this demo page" groups={navLinkGroups}/>
        </Stack>
        </div>
      
    );
  }
}