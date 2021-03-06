import React from 'react';
import {
  renderProviderAndRouter as render,
  screen,
} from '../test-utils/testing-library-utils';
import Post from '../components/post/post';

describe('timeElapsed function', () => {
  beforeEach(() => {
    /*
    set system time to constant time so timeElapsed function does not cause tests to fail with mock post data.
    If system time is not set to constant time, timeElapsed function will always return a larger number as we
    get further away from the mock past date
    */
    jest
      .useFakeTimers()
      .setSystemTime(new Date('March 16 2022 11:00').getTime());
  });

  test('returns post time of 1 day ago', () => {
    // mock post data with post time (created_utc property) adjusted to 1 day ago
    const postData = {
      approved_at_utc: null,
      subreddit: 'greentext',
      selftext: '',
      author_fullname: 't2_edyu9t3r',
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: 'Anon is a rapist',
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
      thumbnail:
        'https://b.thumbs.redditmedia.com/WuafJXjS4QF29kz7W2yelt380P1qs8SegVzmYUPd8hM.jpg',
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
      is_video: false,
    };

    render(<Post postData={postData} />);

    const postTime = screen.getByText(/1 day ago/i);
    expect(postTime).toBeInTheDocument();
  });

  test('returns post time of 3 days ago', () => {
    // mock post data with post time (created_utc property) adjusted to 3 days ago
    const postData = {
      approved_at_utc: null,
      subreddit: 'greentext',
      selftext: '',
      author_fullname: 't2_edyu9t3r',
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: 'Anon is a rapist',
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
      thumbnail:
        'https://b.thumbs.redditmedia.com/WuafJXjS4QF29kz7W2yelt380P1qs8SegVzmYUPd8hM.jpg',
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
      created_utc: 1647151356,
      num_crossposts: 0,
      media: null,
      is_video: false,
    };

    render(<Post postData={postData} />);

    const postTime = screen.getByText(/3 days ago/i);
    expect(postTime).toBeInTheDocument();
  });

  test('returns post time of 10 hours ago', () => {
    // mock post data with post time (created_utc property) adjusted to 1o hours ago
    const postData = {
      approved_at_utc: null,
      subreddit: 'greentext',
      selftext: '',
      author_fullname: 't2_edyu9t3r',
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: 'Anon is a rapist',
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
      thumbnail:
        'https://b.thumbs.redditmedia.com/WuafJXjS4QF29kz7W2yelt380P1qs8SegVzmYUPd8hM.jpg',
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
      created_utc: 1647411356,
      num_crossposts: 0,
      media: null,
      is_video: false,
    };

    render(<Post postData={postData} />);

    const postTime = screen.getByText(/10 hours ago/i);
    expect(postTime).toBeInTheDocument();
  });

  test('returns error message if input is not Epoch decimals', () => {
    // mock post data with post time (created_utc property) adjusted to a string
    const postData = {
      approved_at_utc: null,
      subreddit: 'greentext',
      selftext: '',
      author_fullname: 't2_edyu9t3r',
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: 'Anon is a rapist',
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
      thumbnail:
        'https://b.thumbs.redditmedia.com/WuafJXjS4QF29kz7W2yelt380P1qs8SegVzmYUPd8hM.jpg',
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
      created_utc: 'test',
      num_crossposts: 0,
      media: null,
      is_video: false,
    };

    render(<Post postData={postData} />);

    const postTimeError = screen.getByText(/post time failed to load/i);
    expect(postTimeError).toBeInTheDocument();
  });
});
