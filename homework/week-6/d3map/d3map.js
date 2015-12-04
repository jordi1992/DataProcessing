window.onload = function() {
      var map = new Datamap({
        scope: 'world',
        element: document.getElementById('container1'),
        projection: 'mercator',
        height: 1200, 
        geographyConfig: {
          highlightBorderColor: 'steelblue',
          highlightBorderWidth: 1,
          popupTemplate: function (geo, data) {
            if ( !data ) return;
              return ['<div class="hoverinfo"><strong>','Population in ' + geo.properties.name,' is ' + data.population, '</strong></div>'].join('');
            }
        },
        fills: {
          defaultFill: '#04FFFF',
        }, data: {
        'ABW': {population: '540224050'},
        'AFG': {population: '4231455'},
        'AGO': {population: '10294245'},
        'AIA': {population: '88202044'},
        'ALA': {population: '32411434'},
        'ALB': {population: '111034242'},
        'AND': {population: '3034242'},
        'ARE': {population: '35234234'},
        'ARG': {population: '54224050'},
        'ARM': {population: '4231455'},
        'ASM': {population: '10294245'},
        'ATA': {population: '88202044'},
        'ATF': {population: '32411434'},
        'ATG': {population: '111034242'},
        'AUS': {population: '3034242'},
        'AUT': {population: '35234234'},
        'AZE': {population: '540224050'},
        'BDI': {population: '4231455'},
        'BEL': {population: '10294245'},
        'BEN': {population: '88202044'},
        'BES': {population: '32411434'},
        'BFA': {population: '111034242'},
        'BGD': {population: '3034242'},
        'BGR': {population: '35234234'},
        'BHR': {population: '540224050'},
        'BHS': {population: '4231455'},
        'BIH': {population: '10294245'},
        'BLM': {population: '88202044'},
        'BLR': {population: '32411434'},
        'BLZ': {population: '111034242'},
        'BMU': {population: '3034242'},
        'BOL': {population: '35234234'},
        'BRA': {population: '540224050'},
        'BRB': {population: '4231455'},
        'BRN': {population: '10294245'},
        'BTN': {population: '88202044'},
        'BVT': {population: '32411434'},
        'BWA': {population: '111034242'},
        'CAF': {population: '3034242'},
        'CAN': {population: '35234234'},
        'CCK': {population: '540224050'},
        'CHE': {population: '4231455'},
        'CHL': {population: '10294245'},
        'CHN': {population: '1300000000'},
        'CIV': {population: '32411434'},
        'CMR': {population: '111034242'},
        'COD': {population: '3034242'},
        'COG': {population: '35234234'},
        'COK': {population: '540224050'},
        'COL': {population: '4231455'},
        'COM': {population: '10294245'},
        'CPV': {population: '88202044'},
        'CRI': {population: '32411434'},
        'CUB': {population: '111034242'},
        'CUW': {population: '3034242'},
        'CXR': {population: '35234234'},
        'CYM': {population: '540224050'},
        'CYB': {population: '4231455'},
        'CZE': {population: '10294245'},
        'DEU': {population: '88202044'},
        'DJI': {population: '32411434'},
        'DMA': {population: '111034242'},
        'DNK': {population: '3034242'},
        'DOM': {population: '35234234'},
        'DZA': {population: '540224050'},
        'ECU': {population: '4231455'},
        'EGY': {population: '10294245'},
        'ERI': {population: '88202044'},
        'ESH': {population: '32411434'},
        'ESP': {population: '111034242'},
        'EST': {population: '3034242'},
        'ETH': {population: '35234234'},
        'FIN': {population: '540224050'},
        'FJI': {population: '4231455'},
        'FLK': {population: '10294245'},
        'FRA': {population: '88202044'},
        'FRO': {population: '32411434'},
        'FSM': {population: '111034242'},
        'GAB': {population: '3034242'},
        'GBR': {population: '35234234'},
        'GEO': {population: '540224050'},
        'GGY': {population: '4231455'},
        'GHA': {population: '10294245'},
        'GIB': {population: '88202044'},
        'GIN': {population: '32411434'},
        'GLP': {population: '111034242'},
        'GMB': {population: '3034242'},
        'GNB': {population: '35234234'},
        'GNQ': {population: '540224050'},
        'GRC': {population: '4231455'},
        'GRD': {population: '10294245'},
        'GRL': {population: '88202044'},
        'GTM': {population: '32411434'},
        'GUF': {population: '111034242'},
        'GUM': {population: '3034242'},
        'GUY': {population: '35234234'},
        'HKG': {population: '540224050'},
        'HMD': {population: '4231455'},
        'HND': {population: '10294245'},
        'HRV': {population: '88202044'},
        'HTI': {population: '32411434'},
        'HUN': {population: '111034242'},
        'IDN': {population: '3034242'},
        'IMN': {population: '35234234'},
        'IND': {population: '1100000000'},
        'IOT': {population: '4231455'},
        'IRL': {population: '10294245'},
        'IRN': {population: '88202044'},
        'IRQ': {population: '32411434'},
        'ISL': {population: '111034242'},
        'ISR': {population: '3034242'},
        'ITA': {population: '35234234'},
        'JAM': {population: '540224050'},
        'JEY': {population: '4231455'},
        'JOR': {population: '10294245'},
        'JPN': {population: '88202044'},
        'KAZ': {population: '32411434'},
        'KEN': {population: '111034242'},
        'KGZ': {population: '3034242'},
        'KHM': {population: '35234234'},
        'KIR': {population: '540224050'},
        'KNA': {population: '4231455'},
        'KOR': {population: '10294245'},
        'KWT': {population: '88202044'},
        'LAO': {population: '32411434'},
        'LBN': {population: '111034242'},
        'LBR': {population: '3034242'},
        'LBY': {population: '35234234'},
        'LCA': {population: '540224050'},
        'LIE': {population: '4231455'},
        'LKA': {population: '10294245'},
        'LSO': {population: '88202044'},
        'LTU': {population: '32411434'},
        'LUX': {population: '111034242'},
        'LVA': {population: '3034242'},
        'MAC': {population: '35234234'},
        'MAF': {population: '540224050'},
        'MAR': {population: '4231455'},
        'MCO': {population: '10294245'},
        'MDA': {population: '88202044'},
        'MDG': {population: '32411434'},
        'MDV': {population: '111034242'},
        'MEX': {population: '3034242'},
        'MHL': {population: '35234234'},
        'MKD': {population: '540224050'},
        'MLI': {population: '4231455'},
        'MLT': {population: '10294245'},
        'MMR': {population: '88202044'},
        'MNE': {population: '32411434'},
        'MNG': {population: '111034242'},
        'MNB': {population: '3034242'},
        'MOZ': {population: '35234234'},
        'MRT': {population: '540224050'},
        'MSR': {population: '4231455'},
        'MTQ': {population: '10294245'},
        'MUS': {population: '88202044'},
        'MWI': {population: '32411434'},
        'MYS': {population: '111034242'},
        'MYT': {population: '3034242'},
        'NAM': {population: '35234234'},
        'NCL': {population: '540224050'},
        'NER': {population: '4231455'},
        'NFK': {population: '10294245'},
        'NGA': {population: '88202044'},
        'NIC': {population: '32411434'},
        'NIU': {population: '111034242'},
        'NLD': {population: '3034242'},
        'NOR': {population: '35234234'},
        'NPL': {population: '540224050'},
        'NRU': {population: '4231455'},
        'NZL': {population: '10294245'},
        'OMN': {population: '88202044'},
        'PAK': {population: '32411434'},
        'PAN': {population: '111034242'},
        'PCN': {population: '3034242'},
        'PER': {population: '35234234'},
        'PHL': {population: '540224050'},
        'PLB': {population: '4231455'},
        'PNG': {population: '10294245'},
        'POL': {population: '88202044'},
        'PRI': {population: '32411434'},
        'PRK': {population: '111034242'},
        'PRT': {population: '3034242'},
        'PRY': {population: '35234234'},
        'PSE': {population: '540224050'},
        'PYF': {population: '4231455'},
        'QAT': {population: '10294245'},
        'REU': {population: '88202044'},
        'ROU': {population: '32411434'},
        'RUS': {population: '111034242'},
        'RWA': {population: '3034242'},
        'SAU': {population: '35234234'},
        'SDN': {population: '540224050'},
        'SEN': {population: '4231455'},
        'SGT': {population: '10294245'},
        'SGS': {population: '88202044'},
        'SHN': {population: '32411434'},
        'SJM': {population: '111034242'},
        'SLB': {population: '3034242'},
        'SLE': {population: '35234234'},
        'SLV': {population: '540224050'},
        'SMR': {population: '4231455'},
        'SOM': {population: '10294245'},
        'SPM': {population: '88202044'},
        'SRB': {population: '32411434'},
        'SSD': {population: '111034242'},
        'STP': {population: '3034242'},
        'SUR': {population: '35234234'},
        'SVK': {population: '540224050'},
        'SVN': {population: '4231455'},
        'SWE': {population: '10294245'},
        'SWZ': {population: '88202044'},
        'SXM': {population: '32411434'},
        'SYC': {population: '111034242'},
        'SYR': {population: '3034242'},
        'TCA': {population: '35234234'},
        'TCD': {population: '540224050'},
        'TGO': {population: '4231455'},
        'THA': {population: '10294245'},
        'TJK': {population: '88202044'},
        'TKL': {population: '32411434'},
        'TKM': {population: '111034242'},
        'TLS': {population: '3034242'},
        'TOM': {population: '35234234'},
        'TTO': {population: '540224050'},
        'TUM': {population: '4231455'},
        'TUR': {population: '10294245'},
        'TUV': {population: '88202044'},
        'TWN': {population: '32411434'},
        'TZA': {population: '111034242'},
        'UGA': {population: '3034242'},
        'UKR': {population: '35234234'},
        'UMI': {population: '540224050'},
        'URY': {population: '4231455'},
        'USA': {population: '10294245'},
        'UZB': {population: '88202044'},
        'VAT': {population: '32411434'},
        'VCT': {population: '111034242'},
        'VEN': {population: '3034242'},
        'VGB': {population: '35234234'},
        'VIR': {population: '540224050'},
        'VNM': {population: '4231455'},
        'VUT': {population: '10294245'},
        'WLF': {population: '88202044'},
        'WSM': {population: '32411434'},
        'YEM': {population: '111034242'},
        'ZAF': {population: '3034242'},
        'ZMB': {population: '35234234'},
        'ZWE': {population: '540224050'}
        }
      })
}