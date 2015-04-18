<?php
class fb_comments {
        public function after_load_content(&$file, &$content) {
                $url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
                include 'fb_api.php';
                $fb = "<br><div class='fb-comments' data-href='".$url."' data-num-posts='2' data-width='470px'></div>";
                $content = $fb_sdk.$content.$social_share.$fb;
        }
}
?>
