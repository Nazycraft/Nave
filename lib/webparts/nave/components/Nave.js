var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './Nave.module.scss';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var NavStyles = function (props) {
    var theme = props.theme, isDisabled = props.isDisabled, isSelected = props.isSelected, isGroup = props.isGroup, isLink = props.isLink, _a = props.navHeight, navHeight = _a === void 0 ? 36 : _a;
    var palette = theme.palette;
    return {
        root: [{
                width: 380,
                backgroundColor: '#F3F2F1',
            }
        ],
        link: [
            {
                backgroundColor: "#F3F2F1",
                height: navHeight,
                lineHeight: navHeight + "px",
                fontSize: "18px",
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
                'font-weight': "bold",
                color: "#00B0AD",
                selectors: {
                    '&:after': {
                        borderLeft: "4px solid #00B0AD",
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
var stackTokens = { childrenGap: 0 };
var navLinkGroups = [
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
var SpfxReactRouter = /** @class */ (function (_super) {
    __extends(SpfxReactRouter, _super);
    function SpfxReactRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxReactRouter.prototype.render = function () {
        return (React.createElement("div", { className: styles.nave },
            React.createElement(Stack, { horizontal: true, tokens: stackTokens },
                React.createElement(Nav, { styles: NavStyles, ariaLabel: "Nav example similiar to one found in this demo page", groups: navLinkGroups }))));
    };
    return SpfxReactRouter;
}(React.Component));
export default SpfxReactRouter;
//# sourceMappingURL=Nave.js.map