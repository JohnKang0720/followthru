//
//  BrowseView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct BrowseView: View {
    var body: some View {
        ScrollView{
            VStack {
                NavigationLink(
                    destination: ProjectView(projectName: "Web Dev Server"),
                    label: {
                        ProjectCardView()
                            .foregroundColor(Color.black)
                    })
            ProjectCardView()
            }
        }
        .navigationTitle("Browse Projects")
    }
}

struct BrowseView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
        BrowseView()
        }
    }
}
