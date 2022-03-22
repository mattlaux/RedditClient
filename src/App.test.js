import React from 'react';
import {
  renderProvider as render,
  screen,
} from './test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import App from './App';
import { server } from './mocks/server';
import { rest } from 'msw';

describe('<App />', () => {
  test('Happy path: renders detailed view with comments when post title is clicked and returns to home page', async () => {
    render(<App />);

    // Render loading posts message while posts are being retrieved
    const postsLoadingMessage = screen.getByText(/loading posts/i);
    expect(postsLoadingMessage).toBeInTheDocument();

    // Start at home page and then click post title that routes to detail view
    const postTitle = await screen.findByText('Anon is a rapist ukraine');
    expect(postTitle).toBeInTheDocument();
    userEvent.click(postTitle);

    // Render post information in detail view format
    const homeLink = await screen.findByRole('link');
    const subreddit = screen.getByRole('heading', { name: /r\/greentext/i });
    const title = screen.getByText(/anon is a rapist ukraine/i);
    const commentsLoadingMessage = screen.getByText(/loading comments/i);
    expect(commentsLoadingMessage).toBeInTheDocument();

    expect(homeLink).toBeInTheDocument();
    expect(subreddit).toBeInTheDocument();
    expect(title).toBeInTheDocument();

    // Render all comments. Comments to side indicate data property name returned by Reddit API
    const firstCommentBody = await screen.findByText(
      /Do you need consent to go fuck yourself?/i
    ); // body
    const firstCommentUser = screen.getByText(/thelivinlegend/i); // author
    const firstCommentUpvotes = screen.getByText(/84/); // ups
    const lastCommentBody = screen.getByText(
      'You touched her model penis, later virgins'
    ); // body
    const lastCommentUser = screen.getByText(/OhSnap404/i); // author
    const lastCommentUpvotes = screen.getByText(/83/); // ups
    const numComments = screen.getAllByText(/ago/i);

    expect(firstCommentBody).toBeInTheDocument();
    expect(firstCommentUser).toBeInTheDocument();
    expect(firstCommentUpvotes).toBeInTheDocument();
    expect(lastCommentBody).toBeInTheDocument();
    expect(lastCommentUser).toBeInTheDocument();
    expect(lastCommentUpvotes).toBeInTheDocument();
    expect(numComments.length).toBe(14);

    // Return home to main screen
    userEvent.click(homeLink);
    const secondPost = await screen.findByText('2.6 First Banners Via Lumie');
    expect(secondPost).toBeInTheDocument();
  });

  test('displays error message if comments were not successfully received', async () => {
    server.resetHandlers(
      rest.get('https://www.reddit.com/r/greentext/comments/tep5ud/anon_is_a_rapist/.json', (req, res, ctx) =>
        res(ctx.status(500))
      ),
      rest.get('https://www.reddit.com/hot.json', (req, res, ctx) => res(
        ctx.json({
          kind: 'Listing',
          data: {
            after: 't3_telufc',
            dist: 25,
            modhash: '',
            geo_filter: null,
            children: [
              {
                kind: 't3',
                data: {
                  approved_at_utc: null,
                  subreddit: 'greentext',
                  selftext: '',
                  author_fullname: 't2_edyu9t3r',
                  saved: false,
                  mod_reason_title: null,
                  gilded: 0,
                  clicked: false,
                  title: 'Anon is a rapist ukraine',
                  link_flair_richtext: [],
                  subreddit_name_prefixed: 'r/greentext',
                  hidden: false,
                  pwls: 0,
                  link_flair_css_class: null,
                  downs: 0,
                  thumbnail_height: 140,
                  top_awarded_type: null,
                  hide_score: false,
                  name: 't3_tep5ud',
                  quarantine: false,
                  link_flair_text_color: 'dark',
                  upvote_ratio: 0.95,
                  author_flair_background_color: null,
                  subreddit_type: 'public',
                  ups: 18578,
                  total_awards_received: 4,
                  media_embed: {},
                  thumbnail_width: 140,
                  author_flair_template_id: null,
                  is_original_content: false,
                  user_reports: [],
                  secure_media: null,
                  is_reddit_media_domain: true,
                  is_meta: false,
                  category: null,
                  secure_media_embed: {},
                  link_flair_text: null,
                  can_mod_post: false,
                  score: 18578,
                  approved_by: null,
                  is_created_from_ads_ui: false,
                  author_premium: false,
                  thumbnail: 'https://b.thumbs.redditmedia.com/WuafJXjS4QF29kz7W2yelt380P1qs8SegVzmYUPd8hM.jpg',
                  edited: false,
                  author_flair_css_class: null,
                  author_flair_richtext: [],
                  gildings: [Object],
                  post_hint: 'image',
                  content_categories: null,
                  is_self: false,
                  mod_note: null,
                  created: 1647351356,
                  link_flair_type: 'text',
                  wls: 0,
                  removed_by_category: null,
                  banned_by: null,
                  author_flair_type: 'text',
                  domain: 'i.redd.it',
                  allow_live_comments: false,
                  selftext_html: null,
                  likes: null,
                  suggested_sort: 'top',
                  banned_at_utc: null,
                  url_overridden_by_dest: 'https://i.redd.it/fioh7purvjn81.jpg',
                  view_count: null,
                  archived: false,
                  no_follow: false,
                  is_crosspostable: false,
                  pinned: false,
                  over_18: false,
                  preview: [Object],
                  all_awardings: [Array],
                  awarders: [],
                  media_only: false,
                  can_gild: false,
                  spoiler: false,
                  locked: false,
                  author_flair_text: null,
                  treatment_tags: [],
                  visited: false,
                  removed_by: null,
                  num_reports: null,
                  distinguished: null,
                  subreddit_id: 't5_2srr9',
                  author_is_blocked: false,
                  mod_reason_by: null,
                  removal_reason: null,
                  link_flair_background_color: '',
                  id: 'tep5ud',
                  is_robot_indexable: true,
                  report_reasons: null,
                  author: 'No-Possibility-8258',
                  discussion_type: null,
                  num_comments: 206,
                  send_replies: true,
                  whitelist_status: 'no_ads',
                  contest_mode: false,
                  mod_reports: [],
                  author_patreon_flair: false,
                  author_flair_text_color: null,
                  permalink: '/r/greentext/comments/tep5ud/anon_is_a_rapist/',
                  parent_whitelist_status: 'no_ads',
                  stickied: false,
                  url: 'https://i.redd.it/fioh7purvjn81.jpg',
                  subreddit_subscribers: 1306315,
                  created_utc: 1647351356,
                  num_crossposts: 0,
                  media: null,
                  is_video: false
                }
              },
              {
                kind: 't3',
                data: {
                  approved_at_utc: null,
                  subreddit: 'Genshin_Impact_Leaks',
                  selftext: '',
                  author_fullname: 't2_bvczorkt',
                  saved: false,
                  mod_reason_title: null,
                  gilded: 0,
                  clicked: false,
                  title: '2.6 First Banners Via Lumie',
                  link_flair_richtext: [Array],
                  subreddit_name_prefixed: 'r/Genshin_Impact_Leaks',
                  hidden: false,
                  pwls: 6,
                  link_flair_css_class: '',
                  downs: 0,
                  thumbnail_height: 140,
                  top_awarded_type: null,
                  hide_score: false,
                  name: 't3_telufc',
                  quarantine: false,
                  link_flair_text_color: 'light',
                  upvote_ratio: 0.87,
                  author_flair_background_color: null,
                  ups: 5299,
                  total_awards_received: 15,
                  media_embed: {},
                  thumbnail_width: 140,
                  author_flair_template_id: null,
                  is_original_content: false,
                  user_reports: [],
                  secure_media: null,
                  is_reddit_media_domain: true,
                  is_meta: false,
                  category: null,
                  secure_media_embed: {},
                  link_flair_text: 'Reliable',
                  can_mod_post: false,
                  score: 5299,
                  approved_by: null,
                  is_created_from_ads_ui: false,
                  author_premium: false,
                  thumbnail: 'https://b.thumbs.redditmedia.com/tI2wZiNQoWK5yZEfbJcxIyYCGax-zpa6cm7djNsXD1E.jpg',
                  edited: false,
                  author_flair_css_class: null,
                  author_flair_richtext: [],
                  gildings: [Object],
                  post_hint: 'image',
                  content_categories: null,
                  is_self: false,
                  subreddit_type: 'public',
                  created: 1647339902,
                  link_flair_type: 'richtext',
                  wls: 6,
                  removed_by_category: null,
                  banned_by: null,
                  author_flair_type: 'text',
                  domain: 'i.redd.it',
                  allow_live_comments: true,
                  selftext_html: null,
                  likes: null,
                  suggested_sort: null,
                  banned_at_utc: null,
                  url_overridden_by_dest: 'https://i.redd.it/dk8j1kzrxin81.jpg',
                  view_count: null,
                  archived: false,
                  no_follow: false,
                  is_crosspostable: false,
                  pinned: false,
                  over_18: false,
                  preview: [Object],
                  all_awardings: [Array],
                  awarders: [],
                  media_only: false,
                  link_flair_template_id: '106b842a-66f5-11eb-8c6c-0eb16bfcfc5d',
                  can_gild: false,
                  spoiler: false,
                  locked: false,
                  author_flair_text: null,
                  treatment_tags: [],
                  visited: false,
                  removed_by: null,
                  mod_note: null,
                  distinguished: null,
                  subreddit_id: 't5_3l2acu',
                  author_is_blocked: false,
                  mod_reason_by: null,
                  num_reports: null,
                  removal_reason: null,
                  link_flair_background_color: '#4169e1',
                  id: 'telufc',
                  is_robot_indexable: true,
                  report_reasons: null,
                  author: 'dzeevaed',
                  discussion_type: null,
                  num_comments: 1496,
                  send_replies: false,
                  whitelist_status: 'all_ads',
                  contest_mode: false,
                  mod_reports: [],
                  author_patreon_flair: false,
                  author_flair_text_color: null,
                  permalink: '/r/Genshin_Impact_Leaks/comments/telufc/26_first_banners_via_lumie/',
                  parent_whitelist_status: 'all_ads',
                  stickied: false,
                  url: 'https://i.redd.it/dk8j1kzrxin81.jpg',
                  subreddit_subscribers: 217467,
                  created_utc: 1647339902,
                  num_crossposts: 2,
                  media: null,
                  is_video: false
                }
              }
            ],
          }
        })
      )),
    );
    
    render(<App />);

    // Start at home page and then click post title that routes to detail view
    const postTitle = await screen.findByText('Anon is a rapist ukraine');
    expect(postTitle).toBeInTheDocument();
    userEvent.click(postTitle);

    // Render comment loading message
    const commentsLoadingMessage = screen.getByText(/loading comments/i);
    expect(commentsLoadingMessage).toBeInTheDocument();

    // Render comments failed to load message
    const commentsFailedMessage = await screen.findByText(/failed to retrieve comments/i);
    expect(commentsFailedMessage).toBeInTheDocument();
  });

});
