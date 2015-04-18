<?php

/**
 * Social plugin for Pico CMS
 * Adds social media buttons to posts and pages
 *
 * @author Narcis Radu
 * @link http://narcisradu.ro
 * @license http://opensource.org/licenses/MIT
 */
class Pico_Share {

    public $templates = array(
        'twitter' => 'https://twitter.com/intent/tweet?text=__TITLE__&url=__URL__',
        'facebook' => 'https://www.facebook.com/sharer/sharer.php?u=__URL__',
        'google' => 'https://plus.google.com/share?url=__URL__',
        'linkedin' => 'http://www.linkedin.com/shareArticle?mini=true&url=__URL__&title=__TITLE__&summary=__EXCERPT__&source=__URL__'
    );

    public function __construct() {
        $this->config = array(
            'services' => array(
                'twitter' => true,
                'facebook' => true,
                'google' => true,
                'linkedin' => true
            ),
            'output' => 'link',
            'class_prefix' => 'social-share btn-'
        );
    }

    public function config_loaded(&$settings) {
        if(isset($settings['social']['services'])) {
            $this->config['services'] = $settings['social']['services'];
        };
        if(isset($settings['social']['output'])) {
            $this->config['output'] = $settings['social']['output'];
        };
        if(isset($settings['social']['class_prefix'])) {
            $this->config['class_prefix'] = $settings['social']['class_prefix'];
        };
    }

    public function before_render(&$twig_vars, &$twig, &$template) {
        $pageTitle = $twig_vars['current_page']['title'];
        $pageURL = $twig_vars['current_page']['url'];
        $pageExcerpt = $twig_vars['current_page']['excerpt'];
        $activeServices = array();

        foreach($this->config['services'] as $key => $value) {
            if(is_bool($value) && $value) {
                $activeServices[$key] = '<a class="'.$this->config['class_prefix'].$key.'" target="_blank" href="'.
                    preg_replace(array('/__TITLE__/', '/__URL__/', '/__EXCERPT__/'), array($pageTitle, $pageURL, $pageExcerpt), $this->templates[$key]).
                    '">'.$key.'</a>';
            };
        };
        switch($this->config['output']) {
            case 'link':
                $twig_vars['social_share'] = '<div id="share">'.implode('', array_values($activeServices)).'</div>';
                break;
            default:
                //show as list by default
                $twig_vars['social_share'] = '<ul id="share"><li>'.implode('</li><li>', array_values($activeServices)).'</li></ul>';
                break;
        };
    }
}